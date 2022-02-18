import styles from './styles.module.css'
import React from 'react';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Category from '../../components/Category';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { HOME_GET_FILM_MOVIE, HOME_GET_FILM_TV } from '../../constants';

const Favorite = () => {
    const listMovie = useSelector((state) => state.film.listMovie)
    const listTv = useSelector((state) => state.film.listTv)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: HOME_GET_FILM_MOVIE })
        dispatch({ type: HOME_GET_FILM_TV })
    }, [])

    useEffect(() => {
        const tabTv = document.getElementById("tabTv");
        const tabMovie = document.getElementById("tabMovie");

        tabTv.addEventListener("click", () => {
            tabMovie.classList.remove(styles["favorite-type-link-active"])
            tabTv.classList.add(styles["favorite-type-link-active"])
        })

        tabMovie.addEventListener("click", () => {
            tabTv.classList.remove(styles["favorite-type-link-active"])
            tabMovie.classList.add(styles["favorite-type-link-active"])
        })
    }, [])

    const tabTvRef = useRef(null)
    const tabMovieRef = useRef(null)

    const onClickTv = (e) => {
        tabMovieRef.current.classList.add(styles["favorite-content-movie-hidden"]);
        tabTvRef.current.classList.add(styles["favorite-content-tv"]);
    };

    const onClickMovie = (e) => {
        tabMovieRef.current.classList.remove(styles["favorite-content-movie-hidden"]);
        tabTvRef.current.classList.remove(styles["favorite-content-tv"]);
    };

    return (
        <div className={styles["wrapper"]}>
            <Header />
            <div className={styles["favorite"]}>
                <div className={styles["container"]}>
                    <div className={styles["favorite-type"]}>
                        <span id="tabMovie" className={styles['favorite-type-link'] + " " + styles["favorite-type-link-active"]} onClick={onClickMovie}>Movie</span>
                        <span id="tabTv" className={styles['favorite-type-link']} onClick={onClickTv}>Tvshow</span>
                    </div>
                    <div className={styles['favorite-content-movie']} ref={tabMovieRef}>
                        <Category data={listMovie}></Category>
                    </div>
                    <div className={styles['favorite-content-tv-hidden']} ref={tabTvRef}>
                        <Category data={listTv}></Category>
                    </div>
                </div>
            </div>
            <Footer />
            <Outlet />
        </div>
    );
}

export default Favorite;
