import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [form, setForm] = useState(user || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
      <h1 className="text-2xl mb-4">Editar Perfil</h1>
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="mb-2 w-full p-2 border"
      />
      <input
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="mb-2 w-full p-2 border"
      />
      <button className="bg-blue-500 text-white py-2 px-4 w-full">
        Salvar
      </button>
    </form>
  );
};

export default Profile;
