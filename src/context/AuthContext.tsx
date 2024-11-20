import React, { createContext, useEffect, useState, ReactNode } from 'react';
import {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../services/localStorageService';

// Definindo a interface do usuário
export interface User {
  id: number;
  name: string;
  email: string;
}

// Definindo a interface para o contexto de autenticação
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  updateUser: (newUserData: User) => void;
}

// Valor inicial do contexto
const defaultAuthContext: AuthContextType = {
  user: null,
  login: () => {},
  logout: () => {},
  updateUser: () => {},
};

// Criando o contexto com um valor padrão
export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

// Props do AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Provedor do contexto
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Carregar usuário do LocalStorage ao iniciar o aplicativo
  useEffect(() => {
    const storedUser: User | null = getFromLocalStorage<User>('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Função de login
  const login = (userData: User) => {
    saveToLocalStorage('user', userData);
    setUser(userData);
  };

  // Função de logout
  const logout = () => {
    removeFromLocalStorage('user');
    setUser(null);
  };

  // Atualizar informações do usuário
  const updateUser = (newUserData: User) => {
    saveToLocalStorage('user', newUserData);
    setUser(newUserData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
