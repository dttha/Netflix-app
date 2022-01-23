import React from 'react';
import styles from './styles.module.css'

const SingleFilm = ({ singleFilm }) => {
    return (
        <div className={styles["itemBox"]}>
            <div className={styles["wrap-itemBox"]}>
                <img className={styles["itemBox-img"]} src={singleFilm.image}></img>
                <p className={styles["itemBox-title"]}>{singleFilm.title}</p>
            </div>
        </div>
    )
}

export default SingleFilm