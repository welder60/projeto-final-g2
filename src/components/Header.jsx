import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-lg">
      <h1 className="text-2xl font-bold text-center sm:text-left">🎥 Grupo 2 Filmes</h1>
      <nav className="flex space-x-4">
        <Link to="/" className="hover:text-gray-200 transition-colors">Início</Link>
        <Link to="/favorites" className="hover:text-gray-200 transition-colors">Favoritos</Link>
        <Link to="/profile" className="hover:text-gray-200 transition-colors">Perfil</Link>
      </nav>
      <SearchBar />
    </header>
  );
};

export default Header;
