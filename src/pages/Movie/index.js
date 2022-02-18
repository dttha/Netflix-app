import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { HOME_GET_FILM_BY_GENRE_MOVIE, HOME_GET_FILM_BY_GENRE_MOVIE_ID, HOME_GET_GENRES_MOVIE } from '../../constants';
import styles from './styles.module.css'

const Movie = () => {
    const [isActive, setActive] = useState(false);
    const genresMovie = useSelector((state) => state.film.genresMovie)
    const listMovieByGenreId = useSelector((state) => state.film.listMovieByGenreId)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: HOME_GET_GENRES_MOVIE })
    }, [])

    useEffect(() => {
        if (genresMovie.length > 0) {
            dispatch({ type: HOME_GET_FILM_BY_GENRE_MOVIE_ID, payload: genresMovie[0] })
        }
    }, [genresMovie])

    useEffect(() => {
        const genres = document.getElementById("genres")
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                genres.classList.add(styles["genres-add"])
            } else {
                genres.classList.remove(styles["genres-add"])
            }
        })
    }, [])

    return (
        <div className={styles["wrapper"]} >
            <Header />
            <div className={styles["genres"]} id="genres">
                <div className={styles["container"]}>
                    <div className={styles["wrap-genres"]}>
                        <h5 className={styles["type"]}>MOVIE</h5>
                        <div className={styles["genres-select"]} id="genres-select" onClick={() => setActive(!isActive)} onBlur={() => setActive(false)} tabIndex={0}>
                            <span className={styles["genres-span"]}>Genres</span>
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: "white" }}></FontAwesomeIcon>
                            <ul className={!isActive ? styles["genres-list"] : styles["genres-list"] + " " + styles["add"]} onClick={(e) => {
                                e.stopPropagation()
                            }}>
                                {genresMovie.map((item, index) => {
                                    return (
                                        <div className={styles["genres-link"]} key={"genres" + index}
                                            onClick={() => dispatch({ type: HOME_GET_FILM_BY_GENRE_MOVIE_ID, payload: item })}>
                                            {item.name}
                                        </div>
                                    )
                                }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Banner detailMovie={listMovieByGenreId?.results?.[0]} />
            <div className={styles["tvshow"]}>
                <div className={styles["container"]}>
                    <div className={styles["category-title"]}>
                        {genresMovie.length > 0 &&
                            listMovieByGenreId?.genre?.name
                        }
                    </div>
                    <Category data={listMovieByGenreId.results}></Category>
                </div>
            </div>
            <Footer />
            <Outlet />
        </div>
    );
}

export default Movie;
