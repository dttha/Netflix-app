import React from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import TrailerModal from '../TrailerModal';
import { useEffect, useState } from 'react/cjs/react.development';

const Banner = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const btn = document.getElementById("btn-trailer")
        const modal = document.getElementById("modal-trailer")
        btn.addEventListener("click", () => {
            modal.classList.add(styles["add"])
        })
    }, [])
    return (
        <div className={styles["banner"]}>
            <div className={styles["home-banner"]}>
                <div className={styles["home-banner-content"]}>
                    <div className={styles["container"]}>
                        <h6 className={styles["home-banner-title"]}>Spider-Man: No Way Home</h6>
                        <p className={styles["home-banner-desc"]}>
                            Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.
                        </p>
                        <div className={styles["home-banner-btn"]}>
                            <div className={styles["btn-trailer"]} id="btn-trailer" >
                                <FontAwesomeIcon icon={faCaretRight} style={{ marginRight: 10, fontSize: 20 }}></FontAwesomeIcon>
                                <span>Trailer</span>
                            </div>
                            <Link to="/home/movie/1" className={styles["btn-more-info"]}>
                                <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: 10 }}></FontAwesomeIcon>
                                <span>More info</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["modal-trailer"]} id="modal-trailer" onClick={() => {
                navigate(0)
            }}>
                <TrailerModal />
            </div >
        </div>
    )
}

export default Banner