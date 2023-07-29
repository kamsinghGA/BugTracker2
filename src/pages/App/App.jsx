import logo from './logo.svg';
import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import CodeErrorList from "./components/CodeErrorList";
import ErrorHistory from "./components/ErrorHistory";
import SearchBar from "./components/SearchBar";
import ErrorDetails from "./components/ErrorDetails";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  const isAuthenticated = true; // Replace with actual authentication status

  return (
    <div className="app">
      <Header />
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<CodeErrorList />} />
          <Route path="/history" element={<ErrorHistory />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/error/:id" element={<ErrorDetails />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
