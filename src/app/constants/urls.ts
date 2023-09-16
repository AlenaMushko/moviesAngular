import {environment} from '../../environment/environment';
const {API, API_KEY} = environment;

const api_key = `?api_key=${API_KEY}`;

const movie = `${API}/discover/movie`;
const movieById = `${API}/movie`;
const genre = `${API}/genre/movie/list`;
const soon = `${API}/movie/upcoming`;
const search = `${API}search/movie`;
const cast = `${API}/credits`;
const videos = `${API}/videos`;

const urls = {
    movies: {
        base: movie,
    },
    movieById: {
        base: movieById,
    },
    genres: {
        base: genre,
    },
    soon: {
        base: soon,
    },
    search: {
        base: search,
    },
    cast: {
        base: cast,
    },
    videos: {
        base: videos,
    },
}

export {
    api_key,
    urls,
};
