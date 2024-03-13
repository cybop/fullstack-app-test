import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context for movies
const MovieContext = createContext();

// Custom hook to use the movie context
export const useMovieContext = () => {
  return useContext(MovieContext);
};

// Movie provider component
export const MovieProvider = ({ children }) => {
  // State to store movies
  const [movies, setMovies] = useState([]);

  // Function to fetch movies data from API
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        'https://europe-west1-movie-api-recruitment.cloudfunctions.net/movies',
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch movies data on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  // Provide the movies context to its children
  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  );
};
