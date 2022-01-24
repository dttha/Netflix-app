import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

const SingleFilm = ({ singleFilm }) => {
    return (
        <Link to="/home/movie/1" className={styles["itemBox"]}>
            <div className={styles["wrap-itemBox"]}>
                <img className={styles["itemBox-img"]} src={singleFilm.image}></img>
                <p className={styles["itemBox-title"]}>{singleFilm.title}</p>
            </div>
        </Link>
    )
}

export default SingleFilm