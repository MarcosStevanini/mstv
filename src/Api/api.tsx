const api_key = '0b7c2589ceeaf0e6eb7a22a3866a15f2'
const api_base = 'https://api.themoviedb.org/3'

/*
- Originais da netflix
- Recomendados(trending)
- Em alta(Top rated)
- Ação
- Comédia
- Terror
- Romance
- Documentários
*/

const basicFetch = async (endpoint: any) => {
    const req = await fetch(`${api_base}${endpoint}`)
    const json = await req.json()
    return json
}
export default {
    getHomeList: async() => {
        return [
            // Menus
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}`),
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${api_key}`)
            },
            // Generos
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_geners=28&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_geners=35&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_geners=27&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_geners=10749&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_geners=99&language=pt-BR&api_key=${api_key}`)
            },
        ]
    },

    getMovieInfo: async (movieId:any, movieType:any) => {
        let info = {}

        if(movieId) {
            switch (movieType) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${api_key}`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${api_key}`)
                break;
                default:
                    info = ''
                break;
            }
        }

        return info
    }
}