import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { User } from '../types'; // Ajuste o caminho conforme necessário

const Profile: React.FC = () => {
  const authContext = useContext(AuthContext); // Sem tipagem explícita, confie no valor padrão do contexto
  if (!authContext) {
    throw new Error('AuthContext não foi inicializado corretamente'); // Garantia de contexto
  }

  const { user, updateUser } = authContext;
  const [form, setForm] = useState<User>(user || { id: 0, name: '', email: '' });
  const [error, setError] = useState<string | null>(null); // Estado para exibir mensagens de erro

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação básica
    if (!form.name.trim() || !form.email.trim()) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Atualiza os dados do usuário
    updateUser(form);
    setError(null); // Reseta os erros após sucesso
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
      <h1 className="text-2xl mb-4">Editar Perfil</h1>

      {error && <p className="text-red-500 mb-2">{error}</p>} {/* Exibição de erros */}

      <input
        type="text"
        value={form.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, name: e.target.value })
        }
        className="mb-2 w-full p-2 border"
        placeholder="Nome"
      />
      <input
        type="email"
        value={form.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, email: e.target.value })
        }
        className="mb-2 w-full p-2 border"
        placeholder="Email"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 w-full hover:bg-blue-600 transition-colors"
      >
        Salvar
      </button>
    </form>
  );
};

export default Profile;
