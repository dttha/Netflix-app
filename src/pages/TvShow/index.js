import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './styles.module.css'

const TvShow = () => {
    return (
        <div className={styles["wrapper"]}>
            <Header />
            <div className={styles["genres"]}>
                <div className={styles["container"]}>
                    <div className={styles["wrap-genres"]}>
                        <h5 className={styles["type"]}>Tv show</h5>
                        <div className={styles["genres-select"]}>
                            <span className={styles["genres-span"]}>Genres</span>
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: "white" }}></FontAwesomeIcon>
                            <ul className={styles["genres-list"]}>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Action Adventure</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Animation</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Comedy</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Crime</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Documentary</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Drama</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Family</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Kids</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Mystery</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">News</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Reality</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Sci-Fi Fantasy</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Soap</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Talk</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">War Politics</Link>
                                <Link className={styles["genres-link"]} to="/tvshow/:id">Western</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Banner />
            <Footer />
        </div>
    );
}

export default TvShow;
