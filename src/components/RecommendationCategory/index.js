import React from 'react';
import SingleRecommendation from '../SingleRecommendation';
import styles from './styles.module.css'

const RecommendationCategory = ({ data }) => {
    return (
        <div className={styles["detail-film-recommend-item"]}>
            {data && data.map((item, index) => {
                return <SingleRecommendation key={"recommend" + index} recommendationBox={item}></SingleRecommendation>
            })}
        </div>
    );
}

export default RecommendationCategory;
