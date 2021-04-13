import {
  createContext, 
  useCallback, 
  useContext,
  useMemo,
  useState
} from 'react';
import {
  deleteFavoriteMovie,
  setFavoriteMovie
} from '~/services/movie';
import { useToast } from './ToastContext';
import { Movie } from '~/types/movie';
export interface MoviesContextData {
    movies: Movie[];
    favorites: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    setFavorites: React.Dispatch<React.SetStateAction<Movie[]>>;
    addFavoriteMovie: (imdbID: string) => Promise<void>;
    removeFavoriteMovie: (imdbID: string) => Promise<void>;
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);

const MoviesProvider: React.FC = ({ children }) => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [favorites, setFavorites] = useState<Movie[]>([]);

    const { addToast } = useToast();

    const removeFavoriteMovie = useCallback(async (imdbID: string) => {
        
      await deleteFavoriteMovie(imdbID);

      const updatedMovies = movies.map(movie => (movie.imdbID === imdbID) ? {
          ...movie,
          isFavorite: false,
      } 
      : movie);

      setMovies(updatedMovies);

      addToast({
        type: 'error',
        title: 'Favorito removido!',
        description: 'Foi realizada a completa remoção do registro',
      });

      const updatedFavorites = favorites.filter(movie => movie.imdbID !== imdbID);

      setFavorites(updatedFavorites);
      
  }, [movies, favorites, setFavorites, setMovies, addToast]);

  const addFavoriteMovie = useCallback(async (imdbID: string) => {

    const data = { imdbID };

    try {
        await setFavoriteMovie(data);

        const updatedMovies = movies.map(movie => movie.imdbID === imdbID ? {
            ...movie,
            isFavorite: true,
        } 
        : movie);
        
        setMovies(updatedMovies);

        addToast({
          type: 'success',
          title: 'Favorito adicionado!',
          description: 'Foi realizada a completa adição do registro',
        });

    } catch (error) {}
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [movies]);
  
    const values = useMemo(
      () => ({
        movies,
        favorites,
        setMovies,
        setFavorites,
        addFavoriteMovie,
        removeFavoriteMovie
      }),
      [movies, favorites, setMovies, setFavorites, addFavoriteMovie, removeFavoriteMovie]
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

