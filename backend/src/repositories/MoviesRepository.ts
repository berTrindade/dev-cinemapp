import { EntityRepository, Repository } from "typeorm";
import { Movie } from "../models/Movie";

@EntityRepository(Movie)
class MoviesRepository  extends Repository<Movie> {

}



export { MoviesRepository };
