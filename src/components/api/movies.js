import axios from "axios";

const KEY = '626606dbe7f5835682a8b704b6445e35';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
    const URL = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=en-US&include_adult=false`;
    const { data } = await axios.get(URL);
    return data;
}

export const getMovieDetails = async (id) => {
    const URL = `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US&include_adult=false`;
    const { data } = await axios.get(URL);
    return data;
}

export const getMovieCast = async (id) => {
    const URL = `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US&include_adult=false`;
    const { data } = await axios.get(URL);
    return data;
}

export const getMovieReviews = async (id) => {
    const URL = `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
    const { data } = await axios.get(URL);
    return data;
}

export const searchMovie = async (search) => {
    const URL = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${search}`;
    const { data } = await axios.get(URL);
    return data;
}