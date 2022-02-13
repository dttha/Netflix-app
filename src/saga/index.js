import { call, delay, put, takeEvery, select, all } from 'redux-saga/effects';
import { getActor, getFimlByGenresMovie, getGenresMovie, getGenresTv, getMovieDetail, getTrendingMovieDay, getTrendingTvDay } from '../apis/film';
import { HOME_GET_ACTOR, HOME_GET_ACTOR_SUCCESS, HOME_GET_FILM_BY_GENRE_MOVIE, HOME_GET_FILM_BY_GENRE_MOVIE_SUCCESS, HOME_GET_FILM_MOVIE, HOME_GET_FILM_MOVIE_SUCCESS, HOME_GET_FILM_TV, HOME_GET_FILM_TV_SUCCESS, HOME_GET_GENRES_MOVIE, HOME_GET_GENRES_MOVIE_SUCCESS, HOME_GET_GENRES_TV, HOME_GET_GENRES_TV_SUCCESS, HOME_GET_MOVIE_DETAIL, HOME_GET_MOVIE_DETAIL_SUCCESS } from '../constants';
//hung

function* getFilmMovieSaga({ payload }) {
    // const state = yield select((state) => state)
    // console.log("🚀 ~ file: index.js ~ line 8 ~ function*getFilmMovieSaga ~ state", state)
    // yield delay(500)
    const res = yield call(getTrendingMovieDay) // goi api
    yield put({ type: HOME_GET_FILM_MOVIE_SUCCESS, payload: res.data.results })
}

function* getFilmTvSaga({ payload }) {
    const res = yield call(getTrendingTvDay)
    yield put({ type: HOME_GET_FILM_TV_SUCCESS, payload: res.data.results })
}

function* getGenresMovieSaga() {
    const res = yield call(getGenresMovie)
    yield put({ type: HOME_GET_GENRES_MOVIE_SUCCESS, payload: res.data.genres })
}

function* getGenresTvSaga() {
    const res = yield call(getGenresTv)
    yield put({ type: HOME_GET_GENRES_TV_SUCCESS, payload: res.data.genres })
}

function* getFilmByGenresSaga() {
    const genresMovie = yield select((state) => state.film.genresMovie)
    const res = yield all(genresMovie.map((item) => {
        return call(getFimlByGenresMovie, item.id)
    }))
    const resMap = res.map((item, index) => {
        return {
            genres: genresMovie[index],
            results: item.data.results
        }
    })
    yield put({ type: HOME_GET_FILM_BY_GENRE_MOVIE_SUCCESS, payload: resMap })
}

function* getMovieDetailSaga({ payload }) {
    const res = yield call(getMovieDetail, payload)
    yield put({ type: HOME_GET_MOVIE_DETAIL_SUCCESS, payload: res.data })
}

function* getActorSaga({ payload }) {
    const res = yield call(getActor, payload)
    console.log("🚀 ~ file: index.js ~ line 50 ~ function*getActorSaga ~ res", res)
    yield put({ type: HOME_GET_ACTOR_SUCCESS, payload: res.data })
}

function* mySaga() {
    yield takeEvery(HOME_GET_FILM_MOVIE, getFilmMovieSaga) //4 lan
    yield takeEvery(HOME_GET_FILM_TV, getFilmTvSaga);
    yield takeEvery(HOME_GET_GENRES_MOVIE, getGenresMovieSaga)
    yield takeEvery(HOME_GET_GENRES_TV, getGenresTvSaga)
    yield takeEvery(HOME_GET_FILM_BY_GENRE_MOVIE, getFilmByGenresSaga)
    yield takeEvery(HOME_GET_MOVIE_DETAIL, getMovieDetailSaga)
    yield takeEvery(HOME_GET_ACTOR, getActorSaga)

    // yield takeLatest(HOME_GET_FILM_TV, getFilmTvSaga) //1 lan
}

export default mySaga;