import { call, delay, put, takeEvery, select, all } from 'redux-saga/effects';
import { getActor, getFimlByGenresMovie, getGenresMovie, getGenresTv, getMovieDetail, getTrailer, getTrendingMovieDay, getTrendingTvDay } from '../apis/film';
import { HIDE_LOADING, HOME_GET_ACTOR, HOME_GET_ACTOR_SUCCESS, HOME_GET_FILM_BY_GENRE_MOVIE, HOME_GET_FILM_BY_GENRE_MOVIE_SUCCESS, HOME_GET_FILM_MOVIE, HOME_GET_FILM_MOVIE_SUCCESS, HOME_GET_FILM_TV, HOME_GET_FILM_TV_SUCCESS, HOME_GET_GENRES_MOVIE, HOME_GET_GENRES_MOVIE_SUCCESS, HOME_GET_GENRES_TV, HOME_GET_GENRES_TV_SUCCESS, HOME_GET_MOVIE_DETAIL, HOME_GET_MOVIE_DETAIL_SUCCESS, HOME_GET_TRAILER, HOME_GET_TRAILER_FAIL, HOME_GET_TRAILER_SUCCESS, SHOW_LOADING } from '../constants';
//hung

function* getFilmMovieSaga() {
    yield put({ type: SHOW_LOADING })
    try {
        const res = yield call(getTrendingMovieDay) // goi api
        yield put({ type: HOME_GET_FILM_MOVIE_SUCCESS, payload: res.data.results })
    } catch (e) {
        console.log(e)
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getFilmTvSaga() {
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
    yield put({ type: SHOW_LOADING })
    try {
        const res = yield call(getMovieDetail, payload)
        yield put({ type: HOME_GET_MOVIE_DETAIL_SUCCESS, payload: res.data })
    } catch (e) {
        console.log(e)
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getActorSaga({ payload }) {
    const res = yield call(getActor, payload)
    yield put({ type: HOME_GET_ACTOR_SUCCESS, payload: res.data })
}

function* getTrailerSaga({ payload }) {
    try {
        const res = yield call(getTrailer, payload)
        yield put({ type: HOME_GET_TRAILER_SUCCESS, payload: res.data.results[0] })
    } catch (e) {
        yield put({ type: HOME_GET_TRAILER_FAIL })
    }
}

function* mySaga() {
    yield takeEvery(HOME_GET_FILM_MOVIE, getFilmMovieSaga) //4 lan
    yield takeEvery(HOME_GET_FILM_TV, getFilmTvSaga);
    yield takeEvery(HOME_GET_GENRES_MOVIE, getGenresMovieSaga)
    yield takeEvery(HOME_GET_GENRES_TV, getGenresTvSaga)
    yield takeEvery(HOME_GET_FILM_BY_GENRE_MOVIE, getFilmByGenresSaga)
    yield takeEvery(HOME_GET_MOVIE_DETAIL, getMovieDetailSaga)
    yield takeEvery(HOME_GET_ACTOR, getActorSaga)
    yield takeEvery(HOME_GET_TRAILER, getTrailerSaga)


    // yield takeLatest(HOME_GET_FILM_TV, getFilmTvSaga) //1 lan
}

export default mySaga;