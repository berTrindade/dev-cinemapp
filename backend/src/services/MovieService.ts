import api from '../api/api'

class MovieService {

    async getMovieBySearch (params: string) {
        
        const { data } = await api.get('', {
            params: {
                s: params 
            }
        })        

        return data
    }

    async getMovieByID(params: string) {

        const { data } = await api.get('', {
            params: {                
                i: params
            }
        })

        return data  
    }
}

export { MovieService };