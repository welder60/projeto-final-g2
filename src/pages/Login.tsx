import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login: React.FC = () => {
  const authContext = useContext(AuthContext); // Verificação do contexto
  if (!authContext) {
    throw new Error('AuthContext não está disponível. Certifique-se de que o Login está dentro do AuthProvider.');
  }

  const { login } = authContext;
  const [email, setEmail] = useState<string>(''); // Tipagem explícita como string
  const [password, setPassword] = useState<string>(''); // Tipagem explícita como string

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Dados fictícios para login
    login({ id: Date.now(), name: 'Usuário Padrão', email }); // Envia dados básicos para o contexto
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
      <h1 className="text-2xl mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        className="mb-2 w-full p-2 border"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        className="mb-2 w-full p-2 border"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 w-full hover:bg-blue-600 transition">
        Entrar
      </button>
    </form>
  );
};

export default Login;
