import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { HOME_GET_FILM_BY_GENRE_TV_ID, HOME_GET_GENRES_TV } from '../../constants';
import styles from './styles.module.css'

const TvShow = () => {
    const [isActive, setActive] = useState(false);
    const genresTv = useSelector((state) => state.film.genresTv)
    const listTvByGenreId = useSelector((state) => state.film.listTvByGenreId)

    const dispatch = useDispatch()
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

    useEffect(() => {
        dispatch({ type: HOME_GET_GENRES_TV })
    }, [])

    useEffect(() => {
        if (genresTv.length > 0) {
            dispatch({ type: HOME_GET_FILM_BY_GENRE_TV_ID, payload: genresTv[0] })
        }
    }, [genresTv])

    return (
        <div className={styles["wrapper"]} >
            <Header />
            <div className={styles["genres"]} id="genres">
                <div className={styles["container"]}>
                    <div className={styles["wrap-genres"]}>
                        <h5 className={styles["type"]}>Tv show</h5>
                        <div className={styles["genres-select"]} onClick={() => setActive(!isActive)} onBlur={() => setActive(false)} tabIndex={0}>
                            <span className={styles["genres-span"]}>Genres</span>
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: "white" }}></FontAwesomeIcon>
                            <ul className={!isActive ? styles["genres-list"] : styles["genres-list"] + " " + styles["add"]} onClick={(e) => {
                                e.stopPropagation()
                            }}>
                                {genresTv.map((item, index) => {
                                    return (
                                        <div className={styles["genres-link"]} key={"genres" + index}
                                            onClick={() => dispatch({ type: HOME_GET_FILM_BY_GENRE_TV_ID, payload: item })}>
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
            <Banner detailMovie={listTvByGenreId?.results?.[0]} />
            <div className={styles["tvshow"]}>
                <div className={styles["container"]}>
                    <div className={styles["category-title"]}>
                        {genresTv.length > 0 &&
                            listTvByGenreId?.genre?.name
                        }
                    </div>
                    <Category data={listTvByGenreId.results}></Category>
                </div>
            </div>
            <Footer />
            <Outlet />
        </div >
    );
}

export default TvShow;
