import {
  createContext,
  useState,
  ReactNode,
  PropsWithChildren,
  useContext,
  ChangeEvent,
} from 'react';

interface AuthContextProps {
  userName: string;
  setUserName: (name: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleUserName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    const user = e.target.value;
    setUserName(user);
  };

  return (
    <AuthContext.Provider
      value={{ userName, setUserName, password, setPassword, handleUserName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
