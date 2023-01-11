import React, { useContext } from "react";
import { CardUserInfo } from "../userPostCard/styles";
import { StyledUserCard, StyledUserCardContainer } from "./styles";
import { Button } from "../../button/Button";
import noUser from "../../../assets/noProfilePic.svg";
import { iUserCard } from "./types";
import { UserContext } from "../../../contexts/UserContext/UserContext";

export const UserCard = () => {
  const { allUsers } = useContext(UserContext);

  return (
    <StyledUserCardContainer>
      {allUsers.map((element: iUserCard) => {
        return (
          <StyledUserCard key={element.id}>
            <CardUserInfo>
              <div>
                <figure>
                  {element.url ? (
                    <img src={element.url} alt="" />
                  ) : (
                    <img src={noUser} alt="" />
                  )}
                </figure>
                <section>
                  <h2>{element.name}</h2>

                  {element.favoriteGames &&
                    element.favoriteGames.map((e) => (
                      <img key={e.name} src={e.img} alt="" />
                    ))}
                </section>
              </div>
              <Button
                type="button"
                buttonType="searchUser"
                onClick={() => console.log("Abrir modal")}
              >
                Ver perfil
              </Button>
            </CardUserInfo>
          </StyledUserCard>
        );
      })}
    </StyledUserCardContainer>
  );
};
