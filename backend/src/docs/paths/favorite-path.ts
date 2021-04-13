export const favoriteMoviePath = {
    get: { 
        tags: ['Favorites'],
        summary: 'API para listar filmes favoritos',
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/favorites'
                        }
                    }
                }
            }
        }
    },
    post: { 
        tags: ['Favorites'],
        summary: 'API para adicionar um filme como favorito',
        requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/schemas/favoriteParams'
                }
              }
            }
        },
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/favoriteParams'
                        }
                    }
                }
            }
        }
    }, 
    delete: { 
        tags: ['Favorites'],
        summary: 'API para remover um favorito',
        parameters: [{
            in: 'path',
            name: 'imdbID',
            description: 'ID do favorito a ser removido',
            required: true,
            schema: {
              type: 'string'
            }
        }],
    }
} 