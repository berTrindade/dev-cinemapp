
export const moviesSchema = {
    type: 'array',
    items: {
        $ref: '#/schemas/movie'
    }
}