import api from '../../services/axios';
import { Navigate, NavigateFunction, useNavigate } from 'react-router-dom';
import { iUser, iUserContext, iUserContextProps } from './types';
import { useState, useEffect, createContext } from 'react';
import { iLoginData } from '../../components/form/formLogin/types';
import ToolbarSeparator from 'material-ui/Toolbar/ToolbarSeparator';
import { iRegisterData } from '../../components/form/formRegister/types';

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate: NavigateFunction = useNavigate();

  const [user, setUser] = useState<iUser | null>(null);

  useEffect(() => {
    async function infoUser() {
      const token = localStorage.getItem('@TOKEN');
      const myId: string | null = localStorage.getItem('@ID');

      if (!token && !myId) {
        return;
      }
      try {
        const myToken = JSON.parse(token);
        api.defaults.headers.common.authorization = `Bearer ${myToken}`;
        const response = await api.get(`/users/${myId}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
        localStorage.clear();
      }
    }
    infoUser();
  }, []);

  async function login(data: iLoginData) {
    try {
      const response = await api.post('/login', data);
      // Toast
      localStorage.setItem('@TOKEN', JSON.stringify(response.data.accessToken));
      localStorage.setItem('@ID', response.data.user.id);
      setUser(response.data.user);
      navigate('/dashboard');
    } catch (error) {
      // Toast de erro
    }
  }
  async function registerUser(data: iRegisterData) {
    try {
      const response = await api.post('/register', data);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, login, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
