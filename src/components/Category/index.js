import styles from './styles.module.css';
import React from 'react';
import SingleFilm from '../SingleFilm';

const Category = ({ data }) => {
    return (
        <div className={styles["category-wrap"]}>
            {data && data.map((item) => {
                return <SingleFilm singleFilm={item}></SingleFilm>
            })}
        </div>
    );
}

export default Category;
