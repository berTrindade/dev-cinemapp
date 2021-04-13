export const addfavoriteParamsSchema = {
    type: 'object',
    properties: {
        imdbID: {
            type: 'string'
        },
    }, 
    required: ['imdbID']
}