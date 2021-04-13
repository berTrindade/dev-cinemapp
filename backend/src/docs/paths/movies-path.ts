export const moviePath = {
    get: {
        tags: ['Movies'],
        summary: 'Find a movie, series or episode from the OMDb by search',
        parameters: [
            {
                name: "s",
                in: "query",
                required: true,
                type: "string",
                description: "Movie title to search for."
            }   
        ],
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/movies'
                        }
                    }
                }
            }
        }
    }
}