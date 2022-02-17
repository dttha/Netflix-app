import styles from './styles.module.css'
import React from 'react';
import Header from '../../components/Header';
import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Category from '../../components/Category';
import Footer from '../../components/Footer';

const Favorite = () => {
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


    const data1 = [
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

    const data2 = [
        {
            image: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            title: "title"
        },
        {
            image: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            title: "title1"
        },
        {
            image: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            title: "title2"
        },
        {
            image: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            title: "title3"
        },
        {
            image: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            title: "title4"
        },
        {
            image: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            title: "title5"
        },
        {
            image: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            title: "title6"
        },
        {
            image: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            title: "title2"
        },
        {
            image: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            title: "title3"
        },
        {
            image: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            title: "title4"
        },
        {
            image: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            title: "title5"
        },
        {
            image: "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
            title: "title6"
        }
    ]

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
                        <Category data={data1}></Category>
                    </div>
                    <div className={styles['favorite-content-tv-hidden']} ref={tabTvRef}>
                        <Category data={data2}></Category>
                    </div>
                </div>
            </div>
            <Footer />
            <Outlet />
        </div>
    );
}

export default Favorite;
