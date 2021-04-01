import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMovies1617249268563 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "movies",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "imdbID",
                        type: "varchar",
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "year",
                        type: "varchar",
                    },
                    {
                        name: "poster",
                        type: "varchar",
                    },
                    {
                        name: "isFavorite",
                        type: "boolean",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movies")
    }

}

