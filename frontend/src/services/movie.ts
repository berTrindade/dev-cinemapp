import api from './api'
import { Movie } from '~/types/movie'

export const getMovies = async (params: string): Promise<Movie[]> => {
    const { data } = await api.get<Movie[]>("/movies", {
        params: {                
            s: params
        }
    })
    return data;
}

export const setFavoriteMovie = async (data: any): Promise<Movie[]> => {    
    const { data: response } = await api.post<Movie[]>("/favorites", data);
    return response
}

export const getFavoriteMovies = async (): Promise<Movie[]> => {
    const { data } = await api.get<Movie[]>("/favorites");    
    return data
}

export const deleteFavoriteMovie = async (id: string) => {    
    await api.delete(`/favorites/${id}`);
}

