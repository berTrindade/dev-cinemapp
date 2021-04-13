
import paths from './paths';
import schemas from './schemas';
// import components from './components';

export default {
    openapi: '3.0.3',
    info: {
        title: '',
        description: '',
        version: '',
        contact: {
            name: '',
            email: '',
            url: '',
        },
        license: {
            name: '',
            url: ''
        },
    },
    // externalDocs: {
    //     description: '',
    //     url: ''
    // },
    servers: [{
        url: '/',
        description: 'Servidor Principal'
    }],
    tags: [{
        name: 'Movies', 
        description: 'APIs related to Movies'
    }, {
        name: 'Favorites',
        description: 'APIs related to Favorites'
    }],
    paths,
    schemas,
    // components
}