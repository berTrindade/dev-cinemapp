import React, { useCallback } from 'react';
import { useMovies } from '../../context/MoviesContext';
import {
    deleteFavoriteMovie,
    getFavoriteMovies, setFavoriteMovie
} from '../../services/movie.service';
import styles from '../../styles/components/Layout/Catalog.module.css';
import { Movie } from '../../types/movie.types';
import { MovieCard } from '../MovieCard/MovieCard';

interface CatalogProps {
    movies?: Movie[];
}

const Catalog: React.FC<CatalogProps> = ({ movies = [] }) => {

    const { favorites, setFavorites, movies: catalogMovies, setMovies } = useMovies();

    const addFavoriteMovie = useCallback(async (imdbID: string) => {

        const data = { imdbID };

        try {
            await setFavoriteMovie(data);

            const updatedMovies = catalogMovies.map(movie => movie.imdbID === imdbID ? {
                ...movie,
                isFavorite: true,
            } 
            : movie);
            
            setMovies(updatedMovies);

            const updatedFavorites = await getFavoriteMovies();
            
            setFavorites(updatedFavorites);
            
        } catch (error) {
            
        }
    }, [catalogMovies, setMovies, setFavorites]);

    const removeFavoriteMovie = useCallback( async (id: any, imdbID: string) => {
        await deleteFavoriteMovie(id);

        const updatedMovies = catalogMovies.map(movie => (movie.imdbID === imdbID) ? {
            ...movie,
            isFavorite: false,
        } 
        : movie);

        setMovies(updatedMovies);

        const updatedFavorites = favorites.filter(movie => movie.id !== id);

        setFavorites(updatedFavorites);
        
    }, [catalogMovies, favorites, setFavorites, setMovies]);
    
    return (
        <section className={styles.cardListMovies}>            
            {movies.map((movie) => (  
                <MovieCard  
                    movie={movie} 
                    onRemove={removeFavoriteMovie} 
                    addFavoriteMovie={addFavoriteMovie} 
                />
            ))}
        </section>
    )
}

export default React.memo(Catalog);