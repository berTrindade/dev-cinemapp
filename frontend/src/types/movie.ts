
export type Movie = {
    id?: string;
    title: string;
    year: string;
    imdbID: string;
    poster: string;
    isFavorite: boolean;
}
export interface MovieCardProps {
    movie: Movie;
}