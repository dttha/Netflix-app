import React from 'react';
import Banner from '../../components/Banner';
import ContentHome from '../../components/ContentHome';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './styles.module.css'

const Home = () => {
    return (
        <div className={styles["wrapper"]} id="home">
            <Header />
            <Banner />
            <ContentHome />
            <Footer />
        </div>
    )
}

export default Home