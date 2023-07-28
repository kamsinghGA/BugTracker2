import './App.css';
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      <NavBar />
      <AuthPage />
    </main>
  );
}

