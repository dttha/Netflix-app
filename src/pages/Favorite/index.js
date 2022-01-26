import styles from './styles.module.css'
import React from 'react';
import Header from '../../components/Header';
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Category from '../../components/Category';
import Footer from '../../components/Footer';

const Favorite = () => {

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
        <div className={styles["wrapper"]}>
            <Header />
            <div className={styles["favorite"]}>
                <div className={styles["container"]}>
                    <div className={styles["favorite-type"]}>
                        <NavLink id="1" to="/favorite" className={({ isActive }) => isActive ? `${styles['favorite-type-link-active']} ${styles["favorite-type-link"]}` : styles["favorite-type-link"]}>Movie</NavLink>
                        <NavLink id="2" to="/" className={({ isActive }) => isActive ? `${styles['favorite-type-link-active']} ${styles["favorite-type-link"]}` : styles["favorite-type-link"]}>Tvshow</NavLink>
                    </div>
                    <div className={styles['favorite-content-movie']}>
                        <Category data={data1}></Category>
                    </div>
                    <div className={styles['favorite-content-tv']}>
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
