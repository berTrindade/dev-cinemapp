import { createContext, useContext, useMemo, useState } from 'react';
import { Movie } from '../types/movie.types';

export interface MoviesContextData {
    movies: Movie[];
    setMovies: Function;
    favorites: Movie[];
    setFavorites: Function;
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);

const MoviesProvider: React.FC = ({ children }) => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [favorites, setFavorites] = useState<Movie[]>([]);
  
    const values = useMemo(
      () => ({
        movies,
        setMovies,
        favorites,
        setFavorites,
      }),
      [movies, setMovies, favorites, setFavorites]
    )

    return (
      <MoviesContext.Provider value={{ ...values }}>
        {children}
      </MoviesContext.Provider>
    );
  };
  
  function useMovies(): MoviesContextData {
    const context = useContext<MoviesContextData>(MoviesContext);
  
    if (!context) {
      throw new Error("useMovies must be used within MoviesProvider");
    }
  
    return context;
  }
  
  export { MoviesProvider, useMovies };

