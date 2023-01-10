import api from "../../services/axios";
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";
import {
  iPost,
  iUser,
  iUserContext,
  iUserContextProps,
  iUserResponse,
} from "./types";
import { useState, useEffect, createContext } from "react";
import { iLoginData } from "../../components/form/formLogin/types";
import ToolbarSeparator from "material-ui/Toolbar/ToolbarSeparator";
import { iRegisterData } from "../../components/form/formRegister/types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate: NavigateFunction = useNavigate();

  const [user, setUser] = useState<iUser | null>(null);
  const [posts, setPosts] = useState([] as iPost[]);
  const [allUsers, setAllUsers] = useState([]);
  const [loadingGames, setLoadingGames] = useState(false);
  const [filterPosts, setFilterPosts] = useState("todos");

  function filterUsers(id: number) {
    const findUser = allUsers.find((e: iUserResponse) => e.id === id);
    return findUser;
  }

  const functionFilter = (game: string) => {
    if (game === "todos") {
      return posts;
    } else {
      const filteredNewPost = posts.filter((e) => e.title === game);
      return filteredNewPost;
    }
  };

  const filteredPosts = functionFilter(filterPosts);

  useEffect(() => {
    async function infoUser() {
      const token = localStorage.getItem("@TOKEN");
      const myId: string | null = localStorage.getItem("@ID");

      if (!token && !myId) {
        return;
      }
      try {
        const myToken = JSON.parse(token);
        api.defaults.headers.common.authorization = `Bearer ${myToken}`;
        const response = await api.get(`/users/${myId}`);
        const responsePost = await api.get("/posts");
        const responseAllUsers = await api.get("/users");
        setPosts(responsePost.data);
        console.log(responsePost.data);
        setUser(response.data);
        setAllUsers(responseAllUsers.data);
        console.log(responseAllUsers.data);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        localStorage.clear();
      }
    }
    infoUser();
  }, [navigate, loadingGames]);

  async function login(data: iLoginData) {
    try {
      const response = await api.post("/login", data);
      // Toast
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.accessToken));
      localStorage.setItem("@ID", response.data.user.id);
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      // Toast de erro
    }
  }
  async function registerUser(data: iRegisterData) {
    try {
      const response = await api.post("/register", data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        registerUser,
        posts,
        filterUsers,
        setLoadingGames,
        filteredPosts,
        setFilterPosts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
