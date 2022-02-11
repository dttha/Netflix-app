import { HOME_GET_FILM_BY_GENRE_MOVIE_SUCCESS, HOME_GET_FILM_MOVIE_FAIL, HOME_GET_FILM_MOVIE_SUCCESS, HOME_GET_FILM_TV_SUCCESS, HOME_GET_GENRES_MOVIE_SUCCESS, HOME_GET_GENRES_TV_SUCCESS } from "../constants"

const initialState = {
    listMovie: [],
    listTv: [],
    genresMovie: [],
    genresTv: [],
    movieFavorites: [],
    tvFavorites: [],
    search: [],
    listFilmByGenres: []
}

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_GET_FILM_MOVIE_SUCCESS: {
            return {
                ...state,
                listMovie: action.payload,
            }
        }
        case HOME_GET_FILM_TV_SUCCESS: {
            return {
                ...state,
                listTv: action.payload.map((item) => {
                    return {
                        ...item,
                        title: item.original_name
                    }
                }),
            }
        }
        case HOME_GET_FILM_MOVIE_FAIL: {
            return {
                ...state,
            }
        }
        case HOME_GET_GENRES_MOVIE_SUCCESS: {
            return {
                ...state,
                genresMovie: action.payload
            }
        }
        case HOME_GET_GENRES_TV_SUCCESS: {
            return {
                ...state,
                genresTv: action.payload
            }
        }
        case HOME_GET_FILM_BY_GENRE_MOVIE_SUCCESS: {
            return {
                ...state,
                listFilmByGenres: action.payload
            }
        }
        default:
            return state
    }
}

export default filmReducer