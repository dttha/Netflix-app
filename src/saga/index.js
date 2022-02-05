import { call, delay, put, takeEvery, select } from 'redux-saga/effects';
import { getTrendingMovieDay, getTrendingTvDay } from '../apis/film';
import { HOME_GET_FILM_MOVIE, HOME_GET_FILM_MOVIE_SUCCESS, HOME_GET_FILM_TV, HOME_GET_FILM_TV_SUCCESS } from '../constants';
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

function* mySaga() {
    yield takeEvery(HOME_GET_FILM_MOVIE, getFilmMovieSaga) //4 lan
    yield takeEvery(HOME_GET_FILM_TV, getFilmTvSaga);
    // yield takeLatest(HOME_GET_FILM_TV, getFilmTvSaga) //1 lan
}

export default mySaga;