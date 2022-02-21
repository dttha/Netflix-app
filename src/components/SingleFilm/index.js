import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css'

const SingleFilm = ({ singleFilm }) => {
    const location = useLocation()
    return (
        <Link to={`${location.pathname}/movie-detail/${singleFilm.id}/${singleFilm.type}`} className={styles["itemBox"]}>
            <div className={styles["wrap-itemBox"]}>
                <img className={styles["itemBox-img"]} src={`https://image.tmdb.org/t/p/original/${singleFilm.backdrop_path}`}></img>
                <p className={styles["itemBox-title"]}>{singleFilm.title}</p>
            </div>
        </Link>
    )
}

export default SingleFilm