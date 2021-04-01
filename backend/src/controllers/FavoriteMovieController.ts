
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { FavoriteMovieRepository } from '../repositories/FavoriteMovieRepository';
import { MovieService } from '../services/MovieService';

class FavoriteMovieController {
    async create(request: Request, response: Response) {

        const { imdbID } = request.body;
                
        const favoriteMovieRepository = getCustomRepository(FavoriteMovieRepository)

        const alreadyExists = await favoriteMovieRepository.findOne({
            imdbID
        });

        if(alreadyExists){
            return response.status(400).json({
                error: "Movie already exists!",
            });
        }

        const movieService = new MovieService();
        const movie = await movieService.getMovieByID(imdbID);

        const { 
            Title: title, 
            Year: year, 
            Poster: poster
         } = movie;

        const favorite = favoriteMovieRepository.create({
            imdbID,
            title,
            year, 
            poster,
            isFavorite: true
        });

        await favoriteMovieRepository.save(favorite);

        return response.status(201).json(favorite);
    }

    async index(request: Request, response: Response) {
        const favoriteMovieRepository = getCustomRepository(FavoriteMovieRepository);
        const favorites = await favoriteMovieRepository.find();

        return response.json(favorites);
    }   

    async destroy(request: Request, response: Response) {        
        const { id } = request.params;

        const favoriteMovieRepository = getCustomRepository(FavoriteMovieRepository);            

        try {
            const movie = await favoriteMovieRepository.findOne(id);        

            await favoriteMovieRepository.delete(String(movie?.id));

        } catch (error) {
            
        }

        return response.status(204).json();
    }   
}

export { FavoriteMovieController };
