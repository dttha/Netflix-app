import { HOME_GET_ACTOR_SUCCESS, HOME_GET_FILM_BY_GENRE_MOVIE_ID_SUCCESS, HOME_GET_FILM_BY_GENRE_MOVIE_SUCCESS, HOME_GET_FILM_BY_GENRE_TV_ID_SUCCESS, HOME_GET_FILM_BY_GENRE_TV_SUCCESS, HOME_GET_FILM_MOVIE_FAIL, HOME_GET_FILM_MOVIE_SUCCESS, HOME_GET_FILM_TV_SUCCESS, HOME_GET_GENRES_MOVIE_SUCCESS, HOME_GET_GENRES_TV_SUCCESS, HOME_GET_MOVIE_DETAIL_SUCCESS, HOME_GET_RECOMMEND_FILM_FAIL, HOME_GET_RECOMMEND_FILM_SUCCESS, HOME_GET_TRAILER, HOME_GET_TRAILER_SUCCESS, HOME_GET_TV_DETAIL_SUCCESS } from "../constants"

const initialState = {
    listMovie: [],
    listTv: [],
    genresMovie: [],
    genresTv: [],
    listMovieByGenres: [],
    listTvByGenres: [],
    listMovieByGenreId: {},
    listTvByGenreId: {},
    detailMovie: {},
    actor: {},
    trailer: null,
    listRecommendFilm: []
}

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_GET_FILM_MOVIE_SUCCESS: {
            return {
                ...state,
                listMovie: action.payload.map((item) => ({
                    ...item,
                    type: 'movie'
                })),

            }
        }
        case HOME_GET_FILM_TV_SUCCESS: {
            return {
                ...state,
                listTv: action.payload.map((item) => {
                    return {
                        ...item,
                        title: item.original_name,
                        type: 'tv'
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
                listMovieByGenres: action.payload
            }
        }
        case HOME_GET_FILM_BY_GENRE_TV_SUCCESS: {
            return {
                ...state,
                listTvByGenres: action.payload
            }
        }
        case HOME_GET_MOVIE_DETAIL_SUCCESS: {
            return {
                ...state,
                detailMovie: action.payload
            }
        }
        case HOME_GET_ACTOR_SUCCESS: {
            return {
                ...state,
                actor: action.payload
            }
        }
        case HOME_GET_TRAILER_SUCCESS: {
            return {
                ...state,
                trailer: action.payload
            }
        }
        case HOME_GET_RECOMMEND_FILM_SUCCESS: {
            return {
                ...state,
                listRecommendFilm: action.payload
            }
        }
        case HOME_GET_FILM_BY_GENRE_MOVIE_ID_SUCCESS: {
            return {
                ...state,
                listMovieByGenreId: action.payload
            }
        }
        case HOME_GET_FILM_BY_GENRE_TV_ID_SUCCESS: {
            return {
                ...state,
                listTvByGenreId: action.payload
            }
        }
        default:
            return state
    }
}

export default filmReducer