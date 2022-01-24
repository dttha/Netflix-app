import React from 'react';
import Header from '../../components/Header';
import styles from './styles.module.css'
import avata from "../../assets/images/avata.jpg"
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const Account = () => {
    return (
        <div className={styles["wrapper"]}>
            <Header />
            <div className={styles["account"]}>
                <div className={styles["container"]}>
                    <div className={styles["content"]}>
                        <div className={styles["content-form"]}>
                            <div className={styles["content-section1"]}>
                                <div className={styles["title-block"]}>
                                    <span className={styles["title"]}>Account Detail</span>
                                    <span className={styles["title-name"]}>Name: Thu Hà</span>
                                    <span className={styles["title-country"]}>Country: VN</span>
                                </div>
                                <div className={styles["avata-block"]}>
                                    <img className={styles["avata"]} src={avata}></img>
                                </div>
                            </div>
                            <div className={styles["content-section2"]}>
                                <span className={styles["stats"]}>Stats</span>
                                <div className={styles["number-block"]}>
                                    <div className={styles["start-detail"]}>
                                        <span className={styles["stat-title"]}>Favorite Movies</span>
                                        <span className={styles["stat-total"]}>20</span>
                                    </div>
                                    <div className={styles["start-detail"]}>
                                        <span className={styles["stat-title"]}>Favorite Tvshow</span>
                                        <span className={styles["stat-total"]}>20</span>
                                    </div>
                                    <div className={styles["start-detail"]}>
                                        <span className={styles["stat-title"]}>Total Ratings</span>
                                        <span className={styles["stat-total"]}>20</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["content-section3"]}>
                                <span className={styles["upcoming-title"]}>Checkout New Movie</span>
                                <div className={styles["upcoming-movie"]}>
                                    <div className={styles["movie-image"]}>
                                        <Link to="/home/movie/1" >
                                            <img style={{ width: "100%", display: "block" }} src="https://themoviedb.org/t/p/w355_and_h200_multi_faces//aWeKITRFbbwY8txG5uCj4rMCfSP.jpg"></img>
                                        </Link>
                                    </div>
                                    <div className={styles["movie-info"]}>
                                        <span className={styles["info-title"]}>Sing 2</span>
                                        <span className={styles["info-date"]}>2021-12-01</span>
                                        <p className={styles["info-desc"]}>Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower
                                            Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into
                                            the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang
                                            pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster
                                            must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Account;
