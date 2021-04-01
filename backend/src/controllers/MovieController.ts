
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { Movie } from '../models/Movie';
import { FavoriteMovieRepository } from '../repositories/FavoriteMovieRepository';
import { MovieService } from '../services/MovieService'

class MovieController {
    
    async index(request: Request, response: Response) {

        const title = request.query.s as string;
        
        const movieService = new MovieService();
        const movies = await movieService.getMovieBySearch(title);

        const favoriteMovieRepository = getCustomRepository(FavoriteMovieRepository);
        const favoriteMovies = await favoriteMovieRepository.find();  
        
        let data = [];

        if(favoriteMovies.length) {
            
            const favoritesIDs = favoriteMovies.map((favorite: any) => favorite.imdbID);

            data = movies.Search.map((movie: Movie) => {
                if(favoritesIDs?.includes(movie.imdbID)) {    
                    return {
                        ...movie,
                        isFavorite: true
                    }
                }
                
                return  {
                    ...movie,
                    isFavorite: false
                }
            });    
        } else {

            data = movies.Search.map((movie: Movie) => {
                return  {
                    ...movie,
                    isFavorite: false
                }
            });
        }
            
        const newData = <any>[];

        data.map(({ Title, Year, imdbID, Poster, isFavorite }: any) => {

          const data = {
            title: Title,
            year: Year,
            imdbID: imdbID,
            poster: Poster,
            isFavorite
          };

          newData.push(data);
        });
                        
        return response.json(newData);
    }   
}

export { MovieController };
