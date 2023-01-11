import vava from "../../../assets/vava.svg";
import userImg from "../../../assets/userImg.svg";
import noUser from "../../../assets/noProfilePic.svg";
import { Button } from "../../button/Button";
import { iUserCard } from "./types";
import { CardUserInfo } from "../userPostCard/styles";
import { StyledUserCard, StyledUserCardContainer } from "./styles";

export const UserCard = () => {
  const userMocCard: Array<iUserCard> = [
    {
      id: 1,
      img: userImg,
      name: "Sara Souza",
      gameImg: vava,
    },
    {
      id: 2,
      img: userImg,
      name: "Sara Souza",
      gameImg: vava,
    },
    {
      id: 3,
      name: "Sara Souza",
      gameImg: vava,
    },
  ];

  return (
    <StyledUserCardContainer>
      {userMocCard.map((element: iUserCard) => {
        return (
          <StyledUserCard key={element.id}>
            <CardUserInfo>
              <div>
                <figure>
                  {element.img ? (
                    <img src={element.img} alt="" />
                  ) : (
                    <img src={noUser} alt="" />
                  )}
                </figure>
                <section>
                  <h2>{element.name}</h2>
                  <img src={element.gameImg} alt="" />
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
