import { DiscordButton, StyledDiv, StyledLink } from "./styles";
import { IModalProfile, IGame } from "./types";
import chat from "../../assets/chat.svg";
import discord from "../../assets/discord.svg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { white } from "material-ui/styles/colors";
import ModalEditProfile from "../modalEditProfile/modalEditProfile";
import { useContext, useState } from "react";
import Modal from "../modal/modal";
import { RiUserUnfollowLine } from "react-icons/ri";
import ModalDeleteProfile from "../modalDeleteProfile/modalDeleteProfile";
import ModalAddGame from "../modalAddGame/modalAddGame";
import { GrFormAdd } from "react-icons/gr";
import { UserContext } from "../../contexts/UserContext/UserContext";
import LogoutIcon from "@mui/icons-material/Logout";

const ModalProfileUser = ({ user }: IModalProfile) => {
    const [modalProfile, setModalProfile] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalAddGame, setModalAddGame] = useState(false);

    const { logout } = useContext(UserContext);

    return (
        <StyledDiv>
            <div>
                <img src={user.url} alt={user.name} />
            </div>

            <div>
                <h2>{user.name}</h2>
                <h4>{user.socialMedia}</h4>
            </div>

            <section>
                <button
                    onClick={() => {
                        setModalProfile(!modalProfile);
                    }}
                >
                    <h2>Editar usuário</h2>
                    <MdOutlineArrowForwardIos size={30} />
                </button>
            </section>

            <div>
                <h3>Jogos Favoritos</h3>
                <button
                    onClick={() => {
                        setModalAddGame(!modalAddGame);
                    }}
                >
                    <GrFormAdd size={30} />
                </button>
            </div>
            <Modal
                state={modalAddGame}
                setState={setModalAddGame}
                title={"Adicionar Jogos"}
            >
                <ModalAddGame setState={setModalAddGame} />
            </Modal>

            <div>
                {user.favoriteGames.map((game: IGame) => {
                    return (
                        <img key={game.name} src={game.img} alt={game.name} />
                    );
                })}
            </div>

            <Modal
                state={modalProfile}
                setState={setModalProfile}
                title={"PERFIL"}
            >
                <ModalEditProfile />
            </Modal>
            <Modal
                state={modalDelete}
                setState={setModalDelete}
                title={"Excluir conta"}
            >
                <ModalDeleteProfile setState={setModalDelete} />
            </Modal>

            {/* <StyledLink to="/*">
                <img src={chat} alt="Chat" />
            </StyledLink>
            <DiscordButton
                onClick={() => {
                    navigator.clipboard.writeText(user.socialMedia);
                }}
            >
                <img src={discord} alt="Discord" />
            </DiscordButton> */}

            <button onClick={() => setModalDelete(!modalDelete)}>
                <h2>Excluir conta</h2>
                <RiUserUnfollowLine size={30} />
            </button>

            <div>
                <h2> logout </h2>
                <LogoutIcon sx={{ fontSize: 30 }} onClick={() => logout()} />
            </div>
        </StyledDiv>
    );
};

export default ModalProfileUser;
