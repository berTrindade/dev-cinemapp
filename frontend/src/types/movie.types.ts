
export type Movie = {
    id?: string;
    title: string;
    year: string;
    imdbID: string;
    poster: string;
    isFavorite: boolean;
}

// export type MovieSearchResultType = {
//     totalResults: number;
//     Response: string;
//     Search: Movie[];
// }

export interface MovieCardProps {
    movie: Movie;
    onRemove(id: string | undefined, imdbID: string): Promise<void>;
    addFavoriteMovie(id: any): void;
}