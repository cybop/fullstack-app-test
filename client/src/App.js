import './App.css';
import React from 'react';
import MovieDescription from './movies/MovieDescription';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './movies/MoviesContext';
import Home from './Home';

function App() {
  return (
    <Router>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:index" element={<MovieDescription />} />
        </Routes>
      </MovieProvider>
    </Router>
  );
}

export default App;
