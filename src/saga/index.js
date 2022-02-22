import { call, delay, put, takeEvery, select, all } from 'redux-saga/effects';
import { getActor, getActorMovie, getActorTv, getFimlByGenresMovie, getFimlByGenresTv, getGenresMovie, getGenresTv, getMovieDetail, getRecommendFilm, getRecommendFilmMovie, getRecommendFilmTv, getTrailer, getTrailerMovie, getTrailerTv, getTrendingMovieDay, getTrendingTvDay, getTvDetail } from '../apis/film';
import { checkLogin, createSession, getRequestToken, getAccountDetail } from '../apis/user';
import { GET_ACCOUNT, GET_ACCOUNT_FAIL, GET_ACCOUNT_SUCCESS, HIDE_LOADING, HOME_GET_ACTOR, HOME_GET_ACTOR_SUCCESS, HOME_GET_FILM_BY_GENRE_MOVIE, HOME_GET_FILM_BY_GENRE_MOVIE_ID, HOME_GET_FILM_BY_GENRE_MOVIE_ID_FAIL, HOME_GET_FILM_BY_GENRE_MOVIE_ID_SUCCESS, HOME_GET_FILM_BY_GENRE_MOVIE_SUCCESS, HOME_GET_FILM_BY_GENRE_TV, HOME_GET_FILM_BY_GENRE_TV_ID, HOME_GET_FILM_BY_GENRE_TV_ID_FAIL, HOME_GET_FILM_BY_GENRE_TV_ID_SUCCESS, HOME_GET_FILM_BY_GENRE_TV_SUCCESS, HOME_GET_FILM_MOVIE, HOME_GET_FILM_MOVIE_SUCCESS, HOME_GET_FILM_TV, HOME_GET_FILM_TV_SUCCESS, HOME_GET_GENRES_MOVIE, HOME_GET_GENRES_MOVIE_SUCCESS, HOME_GET_GENRES_TV, HOME_GET_GENRES_TV_SUCCESS, HOME_GET_MOVIE_DETAIL, HOME_GET_MOVIE_DETAIL_SUCCESS, HOME_GET_RECOMMEND_FILM, HOME_GET_RECOMMEND_FILM_FAIL, HOME_GET_RECOMMEND_FILM_SUCCESS, HOME_GET_TRAILER, HOME_GET_TRAILER_FAIL, HOME_GET_TRAILER_SUCCESS, HOME_GET_TV_DETAIL, HOME_GET_TV_DETAIL_SUCCESS, SHOW_LOADING } from '../constants';
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
    yield put({ type: SHOW_LOADING })
    try {
        const res = yield call(getTrendingTvDay)
        yield put({ type: HOME_GET_FILM_TV_SUCCESS, payload: res.data.results })
    } catch (e) {
        console.log(e)
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getGenresMovieSaga() {
    yield put({ type: SHOW_LOADING })
    try {
        const res = yield call(getGenresMovie)
        yield put({ type: HOME_GET_GENRES_MOVIE_SUCCESS, payload: res.data.genres })
    } catch (e) {
        console.log(e)
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getGenresTvSaga() {
    yield put({ type: SHOW_LOADING })
    try {
        const res = yield call(getGenresTv)
        yield put({ type: HOME_GET_GENRES_TV_SUCCESS, payload: res.data.genres })
    } catch (e) {
        console.log(e)
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getMovieByGenresSaga() {
    yield put({ type: SHOW_LOADING })
    try {
        const genresMovie = yield select((state) => state.film.genresMovie)
        const res = yield all(genresMovie.map((item) => {
            return call(getFimlByGenresMovie, item.id)
        }))
        console.log("🚀 ~ file: index.js ~ line 62 ~ res ~ res", res)
        const resMap = res.map((item, index) => {
            return {
                genres: genresMovie[index],
                results: item.data.results.map((item) => ({
                    ...item,
                    type: "movie"
                }))
            }
        })
        yield put({ type: HOME_GET_FILM_BY_GENRE_MOVIE_SUCCESS, payload: resMap })
    } catch (e) {
        console.log(e)
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getTvByGenresSaga({ payload }) {
    yield put({ type: SHOW_LOADING })
    try {
        const genresTv = yield select((state) => state.film.genresTv)
        const res = yield all(genresTv.map((item) => {
            return call(getFimlByGenresTv, item.id)
        }))
        console.log("🚀 ~ file: index.js ~ line 86 ~ res ~ res", res)
        const resMap = res.map((item, index) => {
            return {
                genres: genresTv[index],
                results: item.data.results.map((item) => ({
                    ...item,
                    title: item.original_name,
                    type: "tv"
                }))
            }
        })
        yield put({ type: HOME_GET_FILM_BY_GENRE_TV_SUCCESS, payload: resMap })
    } catch (e) {
        console.log(e)
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getMovieDetailSaga({ payload }) {
    yield put({ type: SHOW_LOADING })
    try {
        if (payload.type === "movie") {
            const res = yield call(getMovieDetail, payload.id)
            yield put({ type: HOME_GET_MOVIE_DETAIL_SUCCESS, payload: res.data })
        }
        else {
            const res = yield call(getTvDetail, payload.id)
            res.data.original_title = res.data.original_name
            res.data.release_date = res.data.first_air_date
            res.data.runtime = res.data.episode_run_time[0]
            yield put({ type: HOME_GET_MOVIE_DETAIL_SUCCESS, payload: res.data })
        }
    } catch (e) {
        console.log(e)
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getActorSaga({ payload }) {
    yield put({ type: SHOW_LOADING })
    try {
        if (payload.type === 'movie') {
            const res = yield call(getActorMovie, payload.id)
            yield put({ type: HOME_GET_ACTOR_SUCCESS, payload: res.data })
        } else {
            const res = yield call(getActorTv, payload.id)
            yield put({ type: HOME_GET_ACTOR_SUCCESS, payload: res.data })
        }
    } catch (e) {
        console.log(e);
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getTrailerSaga({ payload }) {
    console.log("🚀 ~ file: index.js ~ line 145 ~ function*getTrailerSaga ~ payload", payload)
    yield put({ type: SHOW_LOADING })
    try {
        if (payload.type === 'movie') {
            const res = yield call(getTrailerMovie, payload.id)
            console.log("🚀 ~ file: index.js ~ line 150 ~ function*getTrailerSaga ~ res", res)
            yield put({ type: HOME_GET_TRAILER_SUCCESS, payload: res.data.results[0] })
        } else {
            const res = yield call(getTrailerTv, payload.id)
            yield put({ type: HOME_GET_TRAILER_SUCCESS, payload: res.data.results[0] })
        }
    } catch (e) {
        yield put({ type: HOME_GET_TRAILER_FAIL })
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getRecommendFilmSaga({ payload }) {
    yield put({ type: SHOW_LOADING })
    try {
        if (payload.type === 'movie') {
            const res = yield call(getRecommendFilmMovie, payload.id);
            yield put({ type: HOME_GET_RECOMMEND_FILM_SUCCESS, payload: res.data.results })
        } else {
            const res = yield call(getRecommendFilmTv, payload.id);
            yield put({ type: HOME_GET_RECOMMEND_FILM_SUCCESS, payload: res.data.results })
        }
    } catch (e) {
        yield put({ type: HOME_GET_RECOMMEND_FILM_FAIL })
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getFilmByGenreMovieIdSaga({ payload }) {
    yield put({ type: SHOW_LOADING })
    try {
        const res = yield call(getFimlByGenresMovie, payload.id);
        yield put({
            type: HOME_GET_FILM_BY_GENRE_MOVIE_ID_SUCCESS,
            payload: {
                genre: payload,
                results: res.data.results.map((item) => ({
                    ...item,
                    type: 'movie'
                }))
            }
        })
    }
    catch (e) {
        yield put({ type: HOME_GET_FILM_BY_GENRE_MOVIE_ID_FAIL })
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getFilmByGenreTvIdSaga({ payload }) {
    yield put({ type: SHOW_LOADING })
    try {
        const res = yield call(getFimlByGenresTv, payload.id);
        yield put({
            type: HOME_GET_FILM_BY_GENRE_TV_ID_SUCCESS,
            payload: {
                genre: payload,
                results: res.data.results.map((item) => ({
                    ...item,
                    title: item.original_name,
                    type: 'tv'
                }))
            }
        })
    } catch (e) {
        yield put({ type: HOME_GET_FILM_BY_GENRE_TV_ID_FAIL })
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* getAccountSaga({ payload }) {
    yield put({ type: SHOW_LOADING })
    try {
        const res = yield call(getRequestToken);
        const res1 = yield call(checkLogin, { ...payload, request_token: res.data.request_token });
        const res2 = yield call(createSession, { request_token: res.data.request_token })
        const res3 = yield call(getAccountDetail, res2.data.session_id)
        yield put({ type: GET_ACCOUNT_SUCCESS, payload: { ...res3.data, session_id: res2.data.session_id } })
    } catch (e) {
        console.log("lỗi", e);
        yield put({ type: GET_ACCOUNT_FAIL })
    } finally {
        yield put({ type: HIDE_LOADING })
    }
}

function* mySaga() {
    yield takeEvery(HOME_GET_FILM_MOVIE, getFilmMovieSaga) //4 lan
    yield takeEvery(HOME_GET_FILM_TV, getFilmTvSaga);
    yield takeEvery(HOME_GET_GENRES_MOVIE, getGenresMovieSaga)
    yield takeEvery(HOME_GET_GENRES_TV, getGenresTvSaga)
    yield takeEvery(HOME_GET_FILM_BY_GENRE_MOVIE, getMovieByGenresSaga)
    yield takeEvery(HOME_GET_FILM_BY_GENRE_TV, getTvByGenresSaga)
    yield takeEvery(HOME_GET_MOVIE_DETAIL, getMovieDetailSaga)
    yield takeEvery(HOME_GET_ACTOR, getActorSaga)
    yield takeEvery(HOME_GET_TRAILER, getTrailerSaga)
    yield takeEvery(HOME_GET_RECOMMEND_FILM, getRecommendFilmSaga)
    yield takeEvery(HOME_GET_FILM_BY_GENRE_MOVIE_ID, getFilmByGenreMovieIdSaga)
    yield takeEvery(HOME_GET_FILM_BY_GENRE_TV_ID, getFilmByGenreTvIdSaga)
    yield takeEvery(GET_ACCOUNT, getAccountSaga)


    // yield takeLatest(HOME_GET_FILM_TV, getFilmTvSaga) //1 lan
}

export default mySaga;