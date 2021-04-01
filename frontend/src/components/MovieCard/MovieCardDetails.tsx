
import styles from '../../styles/components/MovieCard/MovieCardDetails.module.css';
import { MovieCardProps } from '../../types/movie.types';
import AddFavorite from '../AddFavorites';

export const MovieCardDetails: React.FC<MovieCardProps> = ({ movie, onRemove, addFavoriteMovie }) => {

    return (
        <button className={styles.favoriteButton} onClick={() => {
            movie.isFavorite ?
            onRemove(movie.id, movie.imdbID) :
            addFavoriteMovie(movie.imdbID)
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

