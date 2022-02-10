import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HOME_GET_FILM_BY_GENRE_MOVIE, HOME_GET_FILM_MOVIE, HOME_GET_FILM_TV, HOME_GET_GENRES_MOVIE } from '../../constants';
import SwiperHome from '../SwiperHome';
import styles from './styles.module.css';

const ContentHome = () => {
    const listMovie = useSelector((state) => state.film.listMovie)
    const listTv = useSelector((state) => state.film.listTv)
    const genresMovie = useSelector((state) => state.film.genresMovie)
    const listFilmByGenres = useSelector((state) => state.film.listFilmByGenres)
    console.log("🚀 ~ file: index.js ~ line 11 ~ ContentHome ~ genresMovie", genresMovie)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: HOME_GET_FILM_MOVIE })
        dispatch({ type: HOME_GET_FILM_TV })
        dispatch({ type: HOME_GET_GENRES_MOVIE })
    }, [])

    useEffect(() => {
        if (genresMovie.length > 0) {
            dispatch({ type: HOME_GET_FILM_BY_GENRE_MOVIE })
        }
    }, [genresMovie])

    console.log(listMovie, 'film');
    return (

        <div className={styles["wrapper"]}>

            <SwiperHome title="Popular Movies" data={listMovie}></SwiperHome>
            <SwiperHome title="Popular TvShows" data={listTv}></SwiperHome>
            {listFilmByGenres.map((item) => {
                return (
                    <SwiperHome title={item.genres.name} data={item.results}></SwiperHome>
                )
            }
            )}
        </div>
    )
}

export default ContentHome