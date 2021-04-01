
import { useEffect } from 'react';
import Catalog from '../components/Layout/Catalog';
import NavBar from '../components/Layout/Navbar';
import { useMovies } from '../context/MoviesContext';
import { getFavoriteMovies } from '../services/movie.service';

export default function Favorites() {
    
    const { favorites, setFavorites } = useMovies();

    useEffect(() => {
        
        async function fetchMovies() {
            const movieFavorites = await getFavoriteMovies();     
            
            setFavorites(movieFavorites);
        }

        fetchMovies();
    }, [setFavorites])

    return (
        <div className="container">
            <NavBar title="Favorites"/>
            <Catalog movies={favorites} />
        </div>
        
    )
}