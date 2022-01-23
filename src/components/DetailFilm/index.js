import React from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faHeart, faStar, faTimes } from '@fortawesome/free-solid-svg-icons'

const DetailFilm = () => {
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["detail-film"]}>
                <div className={styles["detail-film-background-img"]}>
                    <div className={styles["detail-film-title"]}>
                        <h4 className={styles["detail-film-name"]}>Eternals</h4>
                        <div className={styles["detail-film-btn"]}>
                            <div className={styles["btn-trailer"]}>
                                <FontAwesomeIcon icon={faCaretRight} style={{ marginRight: 10, fontSize: 20 }}></FontAwesomeIcon>
                                <span>Trailer</span>
                            </div>
                            <div className={styles["detail-film-btn-feel"]}>
                                <div className={styles["btn-like"]}>
                                    <FontAwesomeIcon icon={faHeart} style={{ position: "absolute", top: "28%", left: "27%", color: "#e50914", fontSize: "20" }}></FontAwesomeIcon>
                                </div>
                                <div className={styles["btn-rate"]}>
                                    <FontAwesomeIcon icon={faStar} style={{ position: "absolute", top: "25%", left: "24%", color: "#fff", fontSize: "20" }}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["btn-close"]}>
                        <FontAwesomeIcon icon={faTimes} style={{ color: "white", fontSize: "30px" }}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailFilm;
