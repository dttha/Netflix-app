import { HOME_GET_FILM_MOVIE_FAIL, HOME_GET_FILM_MOVIE_SUCCESS, HOME_GET_FILM_TV_SUCCESS } from "../constants"

const initialState = {
    listMovie: [],
    listTv: [],
    listGenreMovie: [],
    listGenreTvshow: [],
    genresMovie: [],
    genresTv: [],
    movieFavorites: [],
    tvFavorites: [],
    search: [],
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
            console.log(action.payload);
            return {
                ...state,
            }
        }
        default:
            return state
    }
}

export default filmReducer