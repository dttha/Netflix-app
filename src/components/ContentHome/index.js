import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HOME_GET_FILM_BY_GENRE_MOVIE, HOME_GET_FILM_MOVIE, HOME_GET_FILM_TV, HOME_GET_GENRES_MOVIE, HOME_GET_GENRES_TV } from '../../constants';
import SwiperHome from '../SwiperHome';
import styles from './styles.module.css';

const ContentHome = () => {
    const listMovie = useSelector((state) => state.film.listMovie)
    const listTv = useSelector((state) => state.film.listTv)
    const genresMovie = useSelector((state) => state.film.genresMovie)
    const listMovieByGenres = useSelector((state) => state.film.listMovieByGenres)
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

    return (

        <div className={styles["wrapper"]}>

            <SwiperHome title="Popular Movies" data={listMovie}></SwiperHome>
            <SwiperHome title="Popular TvShows" data={listTv}></SwiperHome>
            {listMovieByGenres.map((item, index) => {
                return (
                    <SwiperHome key={"filmGenres" + index} title={item.genres.name} data={item.results}></SwiperHome>
                )
            }
            )}
        </div>
    )
}

export default ContentHome