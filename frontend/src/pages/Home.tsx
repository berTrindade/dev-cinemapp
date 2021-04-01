import { useRef, useState } from 'react';
import Catalog from '../components/Layout/Catalog';
import NavBar from '../components/Layout/Navbar';
import Search from '../components/Layout/Search';
import Loader from '../components/Loader';
import { useMovies } from '../context/MoviesContext';
import { getMovies } from '../services/movie.service';

export const Home: React.FC = () => {

    const { movies, setMovies } = useMovies();

    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState<string>("batman");
    const searchValueRef = useRef();

    async function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();

        setLoading(true);  

        const response = await getMovies(searchValue);  
        
        if(response) {
            setLoading(false);
            setMovies(response);
        }
    }
    
    return (
        <div>
            <NavBar title="Movies"/>
            <Search 
                searchValueRef={searchValueRef} 
                searchHandler={setSearchValue} 
                handleSubmit={handleSubmit}
            /> 

            {loading 
            ? <Loader /> 
            : <Catalog movies={movies} />}
        </div>
    )
}

export default Home