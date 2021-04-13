export const removeFavoriteParamsSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        imdbID: {
            type: 'string'
        },
        title: {
            type: 'string'
        }, 
        year: {
            type: 'string'
        }, 
        poster: {
            type: 'string'
        }
    }, 
    required: ['imdbID']
}