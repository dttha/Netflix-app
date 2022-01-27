import React from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react/cjs/react.development';

const SingleRecommendation = ({ recommendationBox }) => {
    const btnId = useRef(null)
    const onToggleClick = (e) => {
        btnId.current.classList.toggle(styles["activeHeart-recommendation"]);
    };
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["recommendation-banner"]}>
                <img className={styles["recommendation-img"]} src={recommendationBox.image}></img>
            </div>
            <div className={styles["recommendation-block"]}>
                <div className={styles["recommendation-info"]}>
                    <h4 className={styles["recommendation-title"]}>{recommendationBox.title}</h4>
                    <div className={styles["recommendation-date"]}>
                        <span>{recommendationBox.date}</span>
                    </div>
                </div>
                <div className={styles["faHeart-recommendation"]} ref={btnId}>
                    <FontAwesomeIcon icon={faHeart} onClick={onToggleClick}></FontAwesomeIcon>
                </div>
            </div>
            <div className={styles["recommendation-desc"]}>
                <p>{recommendationBox.desc}</p>
            </div>
        </div>
    );
}

export default SingleRecommendation;
