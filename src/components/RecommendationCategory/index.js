import React from 'react';
import SingleRecommendation from '../SingleRecommendation';

const RecommendationCategory = ({ data }) => {
    return (
        <div>
            {data && data.map((item) => {
                <SingleRecommendation singleRecommendation={item}></SingleRecommendation>
            })}
        </div>
    );
}

export default RecommendationCategory;
