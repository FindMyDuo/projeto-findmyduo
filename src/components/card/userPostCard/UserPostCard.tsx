import React, { useContext } from "react";
import {
  CardContainer,
  CardUserContact,
  CardUserInfo,
  StyledCard,
  Teste,
} from "./styles";
import userImg from "../../../assets/userImg.svg";
import { Button } from "../../button/Button";
import { HiDotsVertical } from "react-icons/hi";
import { TbMessage } from "react-icons/tb";
import discordIcon from "../../../assets/discord.svg";
import { iUserPostCard } from "./types";
import noUser from "../../../assets/noProfilePic.svg";
import { UserContext } from "../../../contexts/UserContext/UserContext";

export const UserPostCard = () => {
  const { filteredPosts, filterUsers } = useContext(UserContext);

  return (
    <CardContainer>
      {filteredPosts.map((element) => {
        const user = filterUsers(element.id);

        return (
          <StyledCard key={element.id}>
            <CardUserInfo>
              <div>
                <figure>
                  {/* {user!.img ? (
                    <img title="userPostImg" src={element.img} />
                  ) : (
                    <img title="userPostImg" src={noUser} />
                  )} */}
                </figure>
                <section>
                  <h3>{user?.name}</h3>
                  <span>{element.title + " | "}</span>
                </section>
              </div>
              <Button
                buttonType="smallIcon"
                type="button"
                onClick={() => console.log("o")}
              >
                <HiDotsVertical />
              </Button>
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
                  onClick={() => console.log("Abir chat")}
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
