import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("movies")
class Movie {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    imdbID: string;

    @Column()
    title: string;

    @Column()
    year: string;

    @Column()
    poster: string;

    @Column()
    isFavorite: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { Movie };