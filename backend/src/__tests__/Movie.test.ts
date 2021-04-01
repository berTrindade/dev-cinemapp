
import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("Movies", () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    it("Should be able to create a new favorite movie", async () => {
        const response = await request(app).post("/favorites").send({
            imdbID: "tt0096895",
            title: "Batman",
            year: "1989",
            poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        })

        expect(response.status).toBe(201);
    });

    it("Should not be able to create a movie with existing imdbID", async () => {
        const response = await request(app).post("/favorites").send({
            imdbID: "tt0096895",
            title: "Batman",
            year: "1989",
            poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        })

        expect(response.status).toBe(400);
    });

    it("Should be able to get all movies", async () => {
        await request(app).post("/favorites").send({
            imdbID: "tt0096897",
            title: "Batman",
            year: "1989",
            poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        })

        const response = await request(app).get("/favorites");

        expect(response.body.length).toBe(2);
    })
})

