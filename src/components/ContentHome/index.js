import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HOME_GET_FILM_MOVIE, HOME_GET_FILM_TV } from '../../constants';
import SwiperHome from '../SwiperHome';
import styles from './styles.module.css';

const ContentHome = () => {
    const listMovie = useSelector((state) => state.film.listMovie)
    const listTv = useSelector((state) => state.film.listTv)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: HOME_GET_FILM_MOVIE })
        dispatch({ type: HOME_GET_FILM_TV })
    }, [])

    console.log(listMovie, 'film');
    return (
        <div className={styles["wrapper"]}>
            <SwiperHome title="Popular Movies" data={listMovie}></SwiperHome>
            <SwiperHome title="Popular TvShows" data={listTv}></SwiperHome>
            <SwiperHome title="Animation movies" data={listMovie}></SwiperHome>
        </div>
    )
}

export default ContentHome