
import { Router } from 'express';
import { FavoriteMovieController } from '../controllers/FavoriteMovieController';

const favoritesRoutes = Router();
const favoriteMovieController = new FavoriteMovieController();

favoritesRoutes.get("/", favoriteMovieController.index);
favoritesRoutes.post("/", favoriteMovieController.create);
favoritesRoutes.delete("/:id", favoriteMovieController.destroy);

export { favoritesRoutes }