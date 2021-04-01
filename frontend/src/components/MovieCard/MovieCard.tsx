import React from "react";
import styles from '../../styles/components/MovieCard/MovieCard.module.css';
import { MovieCardProps } from "../../types/movie.types";
import { MovieCardDetails } from './MovieCardDetails';

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onRemove, addFavoriteMovie }) => {

    return (
        <div className={styles.card} key={movie.imdbID}>
            <img
                className={styles.movieImage}
                src={movie.poster}
                alt="movie"
            />
            <MovieCardDetails
                movie={movie}
                onRemove={onRemove}
                addFavoriteMovie={addFavoriteMovie}
            />
        </div>
    );
}

export default React.memo(MovieCard);