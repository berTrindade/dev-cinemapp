import React from 'react';
import styles from '~/styles/components/Layout/Catalog.module.css';
import { Movie } from '~/types/movie';
import { MovieCard } from '../MovieCard/MovieCard';
interface CatalogProps {
    movies?: Movie[];
}

const Catalog: React.FC<CatalogProps> = ({ movies = [] }) => {    
    return (
        <section className={styles.cardListMovies}>            
            {movies.map((movie) => (  
                <MovieCard 
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </section>
    )
}

export default React.memo(Catalog);