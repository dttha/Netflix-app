import React, { useState } from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { URLs } from '../../constants/urls';

const SingleRecommendation = ({ recommendationBox }) => {
    const [isActive, setActive] = useState(false)
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["recommendation-banner"]}>
                <img className={styles["recommendation-img"]} src={`${URLs.baseImage}/${recommendationBox.backdrop_path}`}></img>
            </div>
            <div className={styles["recommendation-block"]}>
                <div className={styles["recommendation-info"]}>
                    <h4 className={styles["recommendation-title"]}>{recommendationBox.title}</h4>
                    <div className={styles["recommendation-date"]}>
                        <span>{recommendationBox.release_date}</span>
                    </div>
                </div>
                <div className={`${styles["faHeart-recommendation"]} ${isActive ? styles["activeHeart-recommendation"] : ''}`} onClick={() => setActive(!isActive)}>
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </div>
            </div>
            <div className={styles["recommendation-desc"]}>
                <p>{recommendationBox?.overview}</p>
            </div>
        </div>
    );
}

export default SingleRecommendation;
