import { 
    FormEvent, 
    RefObject,
    SetStateAction, 
    Dispatch 
} from 'react';
import styles from '~/styles/components/Layout/Search.module.css';

type SearchProps = {
    searchValueRef: RefObject<HTMLInputElement>;
    searchHandler: Dispatch<SetStateAction<string>>;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}  

export default function Search({ 
    searchValueRef, 
    searchHandler,  
    handleSubmit
}: SearchProps) {       
    return (
        <div className={styles.search}>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <label
                    htmlFor="query"
                    className={styles.name}
                >
                </label>
                <input
                    ref={searchValueRef}
                    type="text"
                    name="movie"
                    placeholder="Search"
                    onChange={(e) => searchHandler(e.target.value)}
                />
                <button 
                    className={styles.search}
                    type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}
