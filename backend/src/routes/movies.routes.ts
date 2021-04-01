
import { Router } from 'express';
import { MovieController } from '../controllers/MovieController';

const moviesRoutes = Router();
const movieController = new MovieController();

moviesRoutes.get("/", movieController.index)

export { moviesRoutes }