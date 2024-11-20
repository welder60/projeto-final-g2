import ReactDOM from 'react-dom/client';
import './styles/global.css'; // Importa o arquivo de estilos globais
import App from './App'; // Importa o componente App
import { AuthProvider } from './context/AuthContext'; // Contexto de autenticação

// Encontre o elemento root no HTML onde a aplicação será renderizada
const rootElement = document.getElementById('root') as HTMLElement;  // Certifique-se de que este é o ID correto

// Verifique se o elemento root foi encontrado corretamente
if (!rootElement) {
  throw new Error("Elemento com id 'root' não encontrado no HTML.");
}

// Cria o root e renderiza a aplicação
const root = ReactDOM.createRoot(rootElement);

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
