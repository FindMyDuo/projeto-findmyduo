import noUser from "../../../assets/noProfilePic.svg";
import discordIcon from "../../../assets/discord.svg";
import { Modal } from "../../modal/modal";
import { Button } from "../../button/Button";
import { TbMessage } from "react-icons/tb";
import { UserContext } from "../../../contexts/UserContext/UserContext";
import { ModalEditPost } from "../../modalEditPost/modalEditPost";
import { HiDotsVertical } from "react-icons/hi";
import { useContext, useState } from "react";
import {
  CardContainer,
  CardUserContact,
  CardUserInfo,
  StyledCard,
  Teste,
} from "./styles";
import { iPost } from "../../../contexts/UserContext/types";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { NavContext } from "../../../contexts/NavContext/NavContext";

export const UserPostCard = () => {
  const { user, filteredPosts, filterUsers } = useContext(UserContext);
  const [editModal, setEditModal] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [userFirebase, setUserFirebase] = useState(null as any);

  const { setNav } = useContext(NavContext);

  const myId = localStorage.getItem("@ID");
  const myIdNumber = parseInt(myId);

  const handleSelect = async (
    e: React.MouseEvent<HTMLButtonElement>,
    userUid: string,
    userName: any
  ) => {
    setNav("chat");
    if (userFirebase === null) {
      const combinedId =
        currentUser.uid > userUid
          ? currentUser.uid + userUid
          : userUid + currentUser.uid;

      try {
        const res = await getDoc(doc(db, "chats", combinedId));

        if (!res.exists()) {
          await setDoc(doc(db, "chats", combinedId), { messages: [] });
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId + ".userInfo"]: {
              uid: userUid,
              displayName: userName.name,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
          await updateDoc(doc(db, "userChats", userUid), {
            [combinedId + ".userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const combinedId =
        currentUser.uid > userFirebase.uid
          ? currentUser.uid + userFirebase.uid
          : userFirebase.uid + currentUser.uid;

      try {
        const res = await getDoc(doc(db, "chats", combinedId));

        if (!res.exists()) {
          await setDoc(doc(db, "chats", combinedId), { messages: [] });
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId + ".userInfo"]: {
              uid: userFirebase.uid,
              displayName: userFirebase.displayName,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
          await updateDoc(doc(db, "userChats", userFirebase.uid), {
            [combinedId + ".userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    setUserFirebase(null);
  };

  return (
    <CardContainer>
      {filteredPosts.map((element) => {
        const user = filterUsers(element.userId);
        return (
          <StyledCard key={element.id}>
            <CardUserInfo>
              <div>
                <figure>
                  {user?.url ? (
                    <img title="userPostImg" src={user.url} />
                  ) : (
                    <img title="userPostImg" src={noUser} />
                  )}
                </figure>
                <section>
                  <h3>{user?.name}</h3>
                  <span>{element.title + " | "}</span>
                </section>
              </div>
              {user?.id === myIdNumber && (
                <Button
                  buttonType="smallIcon"
                  type="button"
                  onClick={() => setEditModal(!editModal)}
                >
                  <HiDotsVertical />
                </Button>
              )}
              <Modal
                title="Editar post"
                setState={setEditModal}
                state={editModal}
              >
                <ModalEditPost
                  setState={setEditModal}
                  post={element}
                ></ModalEditPost>
              </Modal>
            </CardUserInfo>
            <CardUserContact>
              <p>{element.content}</p>
              <div>
                <Button
                  buttonType="smallIcon"
                  type="button"
                  onClick={() => console.log("Ir para o discord")}
                >
                  {user?.socialMedia ? <img src={discordIcon} alt="" /> : <></>}
                </Button>
                <Button
                  buttonType="smallIcon"
                  type="button"
                  onClick={(e) => handleSelect(e, element.uid, user)}
                >
                  <TbMessage />
                </Button>
              </div>
            </CardUserContact>
          </StyledCard>
        );
      })}
    </CardContainer>
  );
};
