import './App.css';
import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            {/* Route components in here */}
            <Route path='/bugs/new' element={<NewBugPage />}/>
            <Route path='/bugs' element={<BugHistoryPage />}/>
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  );
}

