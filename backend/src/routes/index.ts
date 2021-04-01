import { Router } from 'express';

import { favoritesRoutes } from './favorites.routes';
import { moviesRoutes } from './movies.routes';

const router = Router();

router.use('/favorites', favoritesRoutes);
router.use('/movies', moviesRoutes);

export { router };
