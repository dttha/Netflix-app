import axios from 'axios';
import { HOME_GET_FILM_MOVIE_FAIL, HOME_GET_FILM_MOVIE_SUCCESS, HOME_GET_FILM_TV_SUCCESS } from '../constants';
import { apiKey, URLs } from '../constants/urls';

export const setActiveFilm = (film) => {
    return {
        type: 'SET_ACTIVE_FILM',
        payload: film,
    }
}

export const getTrendingMovieDay = () => {
    return (dispatch) => {
        axios.get(URLs.baseUrl + '/trending/movie/day?api_key=' + apiKey)
            .then((res) => {
                dispatch({ type: HOME_GET_FILM_MOVIE_SUCCESS, payload: res.data.results })
            })
            .catch((err) => {
                dispatch({ type: HOME_GET_FILM_MOVIE_FAIL, payload: err })
            })
    }
}

export const getTrendingTvDay = () => {
    return (dispatch) => {
        axios.get(URLs.baseUrl + '/trending/tv/day?api_key=' + apiKey)
            .then((res) => {
                dispatch({ type: HOME_GET_FILM_TV_SUCCESS, payload: res.data.results })
            })
            .catch((err) => {
                dispatch({ type: HOME_GET_FILM_MOVIE_FAIL, payload: err })
            })
    }
}