import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../../components/Banner';
import ContentHome from '../../components/ContentHome';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './styles.module.css'
import { useSelector } from 'react-redux';

const Home = () => {
    const listMovie = useSelector((state) => state.film.listMovie)
    return (
        <div className={styles["wrapper"]} id="home">
            <Header />
            <Banner detailMovie={listMovie?.[0]} />
            <ContentHome />
            <Footer />
            <Outlet />
        </div>
    )
}

export default Home