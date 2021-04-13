
import styles from '~/styles/components/MovieCard/MovieCardDetails.module.css';
import { MovieCardProps } from '~/types/movie';
import AddFavorite from '../AddFavorites';
import { useMovies } from '~/context/MoviesContext';

export const MovieCardDetails: React.FC<MovieCardProps> = ({ movie }) => {

    const { removeFavoriteMovie, addFavoriteMovie } = useMovies();

    return (
        <button className={styles.favoriteButton} onClick={() => {
            movie.isFavorite 
            ? removeFavoriteMovie(movie.imdbID) 
            : addFavoriteMovie(movie.imdbID)
        }}>
            <div className={styles.favoriteIcon}>
                <AddFavorite color={(movie.isFavorite && !movie.id) ? "black" : "white"}/>
            </div>                        
            <div className={styles.aboutMovie}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
            </div>
        </button>
    )
}

export default MovieCardDetails;

