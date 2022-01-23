import React from 'react';
import Banner from '../../components/Banner';
import ContentHome from '../../components/ContentHome';
import DetailFilm from '../../components/DetailFilm';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './styles.module.css'

const Home = () => {
    return (
        <div className={styles["wrapper"]} id="home">
            <Header />
            <Banner />
            <ContentHome />
            <DetailFilm />
            <Footer />
        </div>
    )
}

export default Home