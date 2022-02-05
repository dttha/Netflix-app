import { apiKey, URLs } from "../constants/urls"
import axios from 'axios'

export const getTrendingMovieDay = () => {
    return axios.get(URLs.baseUrl + '/trending/movie/day?api_key=' + apiKey)
}

export const getTrendingTvDay = () => {
    return axios.get(URLs.baseUrl + '/trending/tv/day?api_key=' + apiKey)
}