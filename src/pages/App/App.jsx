import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BugsPage from '../BugsPage/BugsPage';
import NavBar from '../../components/NavBar/NavBar';
import AllBugsPage from '../AllBugsPage/AllBugsPage';
import HomePage from '../HomePage/HomePage'
import DetailsPage from '../DetailsPage/DetailsPage';
import EditPage from '../EditPage/EditPage';

import './App.css';

export default function App() {
  return (
  <>
    <NavBar />
    <Routes>
        <Route path='/addBugs' element={<BugsPage />} />
        <Route path='/allBugs' element={<AllBugsPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<DetailsPage />} />
        <Route path='/edit/:id' element={<EditPage />} />
    </Routes>
  </>
  );
};

