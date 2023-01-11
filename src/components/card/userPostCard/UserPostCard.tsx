import noUser from "../../../assets/noProfilePic.svg";
import discordIcon from "../../../assets/discord.svg";
import { Modal } from "../../modal/modal";
import { Button } from "../../button/Button";
import { TbMessage } from "react-icons/tb";
import { UserContext } from "../../../contexts/UserContext/UserContext";
import { ChatContext } from "../../../contexts/ChatContext/ChatContext";
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

export const UserPostCard = () => {
  const { user, filteredPosts, filterUsers } = useContext(UserContext);
  const { handleSelect } = useContext(ChatContext);

  const [editModal, setEditModal] = useState(false);

  return (
    <CardContainer>
      {filteredPosts.map((element) => {
        console.log(element);

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
              <Button
                buttonType="smallIcon"
                type="button"
                onClick={() => setEditModal(!editModal)}
              >
                <HiDotsVertical />
              </Button>
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
                  // onClick={() => handleSelect(element.uid)}
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
