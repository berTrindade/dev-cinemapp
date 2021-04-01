import { EntityRepository, Repository } from "typeorm";
import { Movie } from "../models/Movie";

@EntityRepository(Movie)
class FavoriteMovieRepository  extends Repository<Movie> {

}



export { FavoriteMovieRepository };
