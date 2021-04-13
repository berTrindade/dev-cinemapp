
import { useEffect } from 'react';
import Catalog from '~/components/Layout/Catalog';
import NavBar from '~/components/Layout/Navbar';
import { useMovies } from '~/context/MoviesContext';
import { getFavoriteMovies } from '~/services/movie';

export default function Favorites() {
    
    const { favorites, setFavorites } = useMovies();

    useEffect(() => {
        
        async function fetchMovies() {
            const movieFavorites = await getFavoriteMovies();     
            
            setFavorites(movieFavorites);
        }

        fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container">
            <NavBar title="Favorites"/>
            <Catalog movies={favorites} />
        </div>
        
    )
}