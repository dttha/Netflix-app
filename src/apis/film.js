import { apiKey, URLs } from "../constants/urls"
import axios from 'axios'

export const getTrendingMovieDay = () => {
    return axios.get('/trending/movie/day', { params: { api_key: apiKey }, baseURL: URLs.baseUrl })
}

export const getTrendingTvDay = () => {
    return axios.get(URLs.baseUrl + '/trending/tv/day?api_key=' + apiKey)
}

export const getGenresMovie = () => {
    return axios.get(URLs.baseUrl + '/genre/movie/list?api_key=' + apiKey)
}

export const getGenresTv = () => {
    return axios.get(URLs.baseUrl + '/genre/tv/list?api_key=' + apiKey)
}

export const getTvByGenres = (genres) => {
    return axios.get('/discover/tv', { params: { api_key: apiKey, with_genres: genres }, baseURL: URLs.baseUrl })
}

export const getFimlByGenresMovie = (genres) => {
    return axios.get('/discover/movie', { params: { api_key: apiKey, with_genres: genres }, baseURL: URLs.baseUrl })
}

export const getFimlByGenresTv = (genres) => {
    return axios.get('/discover/tv', { params: { api_key: apiKey, with_genres: genres }, baseURL: URLs.baseUrl })
}

export const getMovieDetail = (id) => {
    return axios.get('/movie/' + id, { params: { api_key: apiKey, movie_id: id }, baseURL: URLs.baseUrl })
}

export const getTvDetail = (id) => {
    return axios.get('/tv/' + id, { params: { api_key: apiKey, tv_id: id }, baseURL: URLs.baseUrl })
}

export const getActor = (id) => {
    return axios.get('/movie/' + id + '/credits', { params: { api_key: apiKey, movie_id: id }, baseURL: URLs.baseUrl })
}

export const getTrailer = (id) => {
    return axios.get('/movie/' + id + "/videos", { params: { api_key: apiKey, movie_id: id }, baseURL: URLs.baseUrl })
}

export const getRecommendFilm = (id) => {
    return axios.get("/movie/" + id + "/recommendations", { params: { api_key: apiKey, movie_id: id }, baseURL: URLs.baseUrl })
}
export const getRequestToken = () => {
    return axios.get("/authentication/token/new", { params: { api_key: apiKey }, baseURL: URLs.baseUrl })
}
export const checkLogin = (payload) => {
    return axios.post("/authentication/token/validate_with_login", payload, { params: { api_key: apiKey }, baseURL: URLs.baseUrl })
}
export const createSession = (payload) => {
    return axios.post("/authentication/session/new", payload, { params: { api_key: apiKey }, baseURL: URLs.baseUrl })
}
export const getAccountDetail = (payload) => {
    return axios.get("/account", { params: { api_key: apiKey, session_id: payload }, baseURL: URLs.baseUrl })
}
