import './App.css';
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      <NavBar />
    </main>
  );
}

