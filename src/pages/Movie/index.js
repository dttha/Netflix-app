import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './styles.module.css'

const Movie = () => {
    const [isActive, setActive] = useState(false);
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
                        <h5 className={styles["type"]}>MOVIE</h5>
                        <div className={styles["genres-select"]} id="genres-select" onClick={() => setActive(!isActive)} onBlur={() => setActive(false)} tabIndex={0}>
                            <span className={styles["genres-span"]}>Genres</span>
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: "white" }}></FontAwesomeIcon>
                            <ul className={!isActive ? styles["genres-list"] : styles["genres-list"] + " " + styles["add"]} onClick={(e) => {
                                e.stopPropagation()
                            }}>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Action</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Adventure</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Animation</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Comedy</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Crime</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Documentary</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Drama</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Family</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Fantasy</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">History</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Horror</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Music</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Mystery</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Romance</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Science Fiction</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">TV Movie</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Thriller</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">War</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Western</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Banner />
            <div className={styles["tvshow"]}>
                <div className={styles["container"]}>
                    <div className={styles["category-title"]}>
                        Action
                    </div>
                    <Category data={data}></Category>
                </div>
            </div>
            <Footer />
            <Outlet />
        </div>
    );
}

export default Movie;
