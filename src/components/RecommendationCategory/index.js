import React from 'react';
import SingleRecommendation from '../SingleRecommendation';
import styles from './styles.module.css'

const RecommendationCategory = ({ data }) => {
    console.log(data, 'data');
    return (
        <div className={styles["detail-film-recommend-item"]}>
            {data && data.map((item) => {
                return <SingleRecommendation recommendationBox={item}></SingleRecommendation>
            })}
        </div>
    );
}

export default RecommendationCategory;
