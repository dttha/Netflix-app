import React from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import styles from './styles.module.css'

const Home = () => {
    return (
        <div className={styles["wrapper"]} id="home">
            <Header />
            <Banner />
        </div>
    )
}

export default Home