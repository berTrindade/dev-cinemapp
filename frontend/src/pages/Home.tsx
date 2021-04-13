import { FormEvent, useRef, useState } from 'react';
import Catalog from '~/components/Layout/Catalog';
import NavBar from '~/components/Layout/Navbar';
import Search from '~/components/Layout/Search';
import Loader from '~/components/Loader';
import { useMovies } from '~/context/MoviesContext';
import { getMovies } from '~/services/movie';

export const Home: React.FC = () => {

    const { movies, setMovies } = useMovies();

    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("batman");
    const searchValueRef = useRef<HTMLInputElement>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setLoading(true);  

        const response = await getMovies(searchValue);
        
        if(response) {
            setMovies(response);
            setLoading(false);
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