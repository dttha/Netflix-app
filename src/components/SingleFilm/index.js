import React from 'react';
import styles from './styles.module.css'
import singleFilm1 from '../../assets/images/singleFilm1.jpg'

const SingleFilm = () => {
    return (
        <div className={styles["itemBox"]}>
            <div className={styles["wrap-itemBox"]}>
                <img className={styles["itemBox-img"]} src={singleFilm1}></img>
                <p className={styles["itemBox-title"]}>Eternals</p>
            </div>
        </div>
    )
}

export default SingleFilm