import React from "react";
import styles from '~/styles/components/MovieCard/MovieCard.module.css';
import { MovieCardProps } from "../../types/movie";
import { MovieCardDetails } from './MovieCardDetails';

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {

    return (
        <div className={styles.card} key={movie.imdbID}>
            <img
                className={styles.movieImage}
                src={movie.poster}
                alt="movie"
            />
            <MovieCardDetails movie={movie} />
        </div>
    );
}

export default React.memo(MovieCard);