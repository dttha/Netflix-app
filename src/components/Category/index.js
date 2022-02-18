import styles from './styles.module.css';
import React from 'react';
import SingleFilm from '../SingleFilm';

const Category = ({ data }) => {
    return (
        <div className={styles["category-wrap"]}>
            {data && data.map((item, index) => {
                return <SingleFilm key={"singleFilm" + index} singleFilm={item}></SingleFilm>
            })}
        </div>
    );
}

export default Category;
