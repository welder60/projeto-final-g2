import React, { createContext, useState, useEffect } from 'react';
import {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../services/localStorageService';

// Criação do contexto
export const AuthContext = createContext();

// Provedor do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Carregar usuário do LocalStorage ao iniciar o aplicativo
  useEffect(() => {
    const storedUser = getFromLocalStorage('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Função de login
  const login = (userData) => {
    saveToLocalStorage('user', userData);
    setUser(userData);
  };

  // Função de logout
  const logout = () => {
    removeFromLocalStorage('user');
    setUser(null);
  };

  // Atualizar informações do usuário
  const updateUser = (newUserData) => {
    saveToLocalStorage('user', newUserData);
    setUser(newUserData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
