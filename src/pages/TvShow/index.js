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
import { HOME_GET_GENRES_TV } from '../../constants';
import styles from './styles.module.css'

const TvShow = () => {
    const [isActive, setActive] = useState(false);
    const genresTv = useSelector((state) => state.film.genresTv)
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

    const data = [
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title1"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title2"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title3"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title4"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title5"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title6"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title2"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title3"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title4"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title5"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title6"
        }
    ]

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
                                {genresTv.map((item) => {
                                    return (
                                        <Link className={styles["genres-link"]} to="/tvshow/:id">{item.name}</Link>
                                    )
                                }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Banner />
            <div className={styles["tvshow"]}>
                <div className={styles["container"]}>
                    <div className={styles["category-title"]}>
                        Action Adventure
                    </div>
                    <Category data={data}></Category>
                </div>
            </div>
            <Footer />
            <Outlet />
        </div >
    );
}

export default TvShow;
