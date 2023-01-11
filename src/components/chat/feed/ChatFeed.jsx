import { useContext, useEffect, useState } from "react";
import { ContainerChatFeed } from "./styles";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Search from "../../search/Search";
import noPicture from "../../../assets/noProfilePic.svg";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import { ChatContext } from "../../../contexts/ChatContext/ChatContext";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../../../firebase/firebase";
import { MessageCounter, StyledUserMessageCard, UserMessageContact, UserMessageContainer } from "../../card/userMessageCard/styles";

const ChatFeed = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        if (doc) {
          setChats(doc.data());
        }
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <ContainerChatFeed>
      <div>
        <div>
          <h1>Chat</h1>
          <button title="Exit">
            <KeyboardReturnIcon color="primary" fontSize="large" />
          </button>
        </div>
        <Search />
      </div>

      <div>
        <h3>Recentes</h3>
        <div>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
          <figure>
            <img src={noPicture} alt="" />
          </figure>
        </div>
      </div>

      <div>
        <h3>Messagens</h3>
        <div>
          <UserMessageContainer>
            {Object.entries(chats)
              ?.sort((a, b) => b[1].date - a[1].date)
              .map((element) => (
                <StyledUserMessageCard
                  key={element[0]}
                  onClick={() => handleSelect(element[1].userInfo)}
                >
                  <UserMessageContact>
                    <figure>
                      {element.img ? (
                        <img src={element.img} alt="" />
                      ) : (
                        <img src={noPicture} alt="" />
                      )}
                    </figure>
                    <div>
                      <h3>{element[1].userInfo.displayName}</h3>
                      <p>{element[1].lastMessage?.text}</p>
                    </div>
                  </UserMessageContact>
                  <MessageCounter>
                    <p>20min</p>
                    <span>1</span>
                  </MessageCounter>
                </StyledUserMessageCard>
              ))}
          </UserMessageContainer>
        </div>
      </div>
    </ContainerChatFeed>
  );
};

export default ChatFeed;
