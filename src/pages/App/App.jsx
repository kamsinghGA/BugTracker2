import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BugsPage from '../BugsPage/BugsPage';
import { Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
  <>
    <Link to="/bugs">Bugs</Link>
    <Routes>
        <Route path='/bugs' element={<BugsPage />} />
    </Routes>
  </>
  );
}

