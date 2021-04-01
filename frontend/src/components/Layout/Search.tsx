
import styles from '../../styles/components/Layout/Search.module.css';

export default function Search({ 
    searchValueRef, 
    searchHandler,  
    handleSubmit
}: any) {       

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
                    type="submit"
                    onClick={handleSubmit}
                > Search
                </button>
            </form>
        </div>
    )
}
