import {
    favoriteSchema,
    favoritesSchema,
    addfavoriteParamsSchema,
    removeFavoriteParamsSchema,
    movieSchema,
    moviesSchema
} from './schemas/';

export default {
    favorite: favoriteSchema,
    favorites: favoritesSchema,
    favoriteParams: addfavoriteParamsSchema,
    favoriteRemove: removeFavoriteParamsSchema,
    movie: movieSchema,
    movies: moviesSchema
}

