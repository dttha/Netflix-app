import React from 'react';
import Category from '../Category';
import styles from './styles.module.css'

const ContentHome = () => {
    return (
        <div className={styles["wrapper"]}>
            <Category></Category>
        </div>
    )
}

export default ContentHome