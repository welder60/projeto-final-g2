import React, { useState } from 'react';

// Interface para os dados do formulário
interface FormData {
  name: string;
  email: string;
  password: string;
}

// Interface para os erros de validação
interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

const Register: React.FC = () => {
  // Estado para armazenar os dados do formulário
  const [form, setForm] = useState<FormData>({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({}); // Estado para armazenar os erros de validação

  // Função para validar o formulário
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.name) newErrors.name = 'O nome é obrigatório.';
    if (!form.email) newErrors.email = 'O email é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email inválido.';
    if (!form.password) newErrors.password = 'A senha é obrigatória.';
    else if (form.password.length < 6) newErrors.password = 'A senha deve ter pelo menos 6 caracteres.';
    return newErrors;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validationErrors = validateForm(); // Valida o formulário
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Exibe os erros de validação
      return;
    }

    console.log('Usuário cadastrado:', form);

    // Limpa o formulário após o envio
    setForm({ name: '', email: '', password: '' });
    setErrors({}); // Limpa os erros
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
      <h1 className="text-2xl mb-4">Registrar</h1>

      {/* Campo Nome */}
      <input
        type="text"
        placeholder="Nome"
        value={form.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, name: e.target.value })
        }
        className="mb-2 w-full p-2 border"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      {/* Campo Email */}
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, email: e.target.value })
        }
        className="mb-2 w-full p-2 border"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      {/* Campo Senha */}
      <input
        type="password"
        placeholder="Senha"
        value={form.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setForm({ ...form, password: e.target.value })
        }
        className="mb-2 w-full p-2 border"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

      {/* Botão de Envio */}
      <button className="bg-green-500 text-white py-2 px-4 w-full">
        Cadastrar
      </button>
    </form>
  );
};

export default Register;
