
export const favoritesSchema = {
    type: 'array',
    items: {
        $ref: '#/schemas/favorite'
    }
}