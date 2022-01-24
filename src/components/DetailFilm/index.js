import React from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faHeart, faStar, faTimes, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import RecommendationCategory from '../RecommendationCategory';
import { useState } from 'react/cjs/react.development';

const DetailFilm = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const btnLike = document.getElementById("btn-like")
        const faHeart = document.getElementById("faHeart")
        btnLike.addEventListener("click", () => {
            faHeart.classList.toggle(styles["activeHeart"])
        })
        const btnRate = document.getElementById("btn-rate")
        const faStar = document.getElementById("faStar")
        btnRate.addEventListener("click", () => {
            faStar.classList.toggle(styles["activeStar"])
        })

    }, [])

    const data = [
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
        {
            image: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//nvxrQQspxmSblCYDtvDAbVFX8Jt.jpg',
            title: "Don't Look Up",
            date: "2021-12-07",
            desc: "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth."
        },
    ]
    // const modalRef = useRef();
    // const closeModal = (e) => {
    //     if (e.target === modalRef.current) {
    //         navigate("/home")
    //     }
    // }
    return (
        <div className={styles["wrapper"]} onClick={() => {
            navigate("/home")
        }}>
            {/* ngăn sự kiện sủi bọt trong các thành phần lồng nhau khi nhấp chuột */}
            <div className={styles["detail-film"]} onClick={(e) => {
                e.stopPropagation()
            }}>
                {/* Banner */}
                <div className={styles["detail-film-background-img"]}>
                    <div className={styles["detail-film-title"]}>
                        <h4 className={styles["detail-film-name"]}>Eternals</h4>
                        <div className={styles["detail-film-btn"]}>
                            <div className={styles["btn-trailer"]}>
                                <FontAwesomeIcon icon={faCaretRight} style={{ marginRight: 10, fontSize: 20 }}></FontAwesomeIcon>
                                <span>Trailer</span>
                            </div>
                            <div className={styles["detail-film-btn-feel"]}>
                                <div className={styles["btn-like"]} id="btn-like">
                                    <FontAwesomeIcon icon={faHeart} className={styles["faHeart"]} id="faHeart"></FontAwesomeIcon>
                                </div>
                                <div className={styles["btn-rate"]} id="btn-rate">
                                    <FontAwesomeIcon icon={faStar} className={styles["faStar"]} id="faStar"></FontAwesomeIcon>
                                    <div className={styles["rating"] + " " + styles["activeStar"]}>
                                        <FontAwesomeIcon icon={faWindowClose} className={styles["faWindowClose"]}></FontAwesomeIcon>
                                        <div className={styles["rating-group"]}>
                                            <FontAwesomeIcon icon={faStar} className={styles["faStar-group"]} ></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className={styles["faStar-group"]}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className={styles["faStar-group"]}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className={styles["faStar-group"]}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className={styles["faStar-group"]}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className={styles["faStar-group"]}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className={styles["faStar-group"]}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className={styles["faStar-group"]}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className={styles["faStar-group"]}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className={styles["faStar-group"]}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["btn-close"]} onClick={() => {
                        navigate("/home")
                    }}>
                        <FontAwesomeIcon icon={faTimes} style={{ color: "white", fontSize: "30px" }}></FontAwesomeIcon>
                    </div>
                </div>
                {/* Infomation */}
                <div className={styles["wrap-detail-film-info"]}>
                    <div className={styles["detail-film-info"]}>
                        <div className={styles["detail-film-info-left"]}>
                            <div className={styles["detail-film-info-date"]}>
                                <span className={styles["detail-film-info-date-release"]}>2021-12-15</span>
                                <span className={styles["detail-film-info-date-time"]}>2h 28p</span>
                            </div>
                            <span className={styles["detail-film-info-rating"]}>
                                Rating: 8.5
                            </span>
                            <p className={styles["detail-film-info-desc"]}>
                                Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of
                                being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous,
                                forcing him to discover what it truly means to be Spider-Man.
                            </p>
                        </div>
                        <div className={styles["detail-film-info-right"]}>
                            <div className={styles["detail-film-info-actors"]}>
                                <span className={styles["detail-film-info-title"]}>Actors:</span>
                                <span className={styles["detail-film-info-name"]}> Tom Holland,</span>
                                <span className={styles["detail-film-info-name"]}> Zendaya,</span>
                                <span className={styles["detail-film-info-name"]}> Benedict Cumberbatch,</span>
                                <span className={styles["detail-film-info-name"]}> Jacob Batalon,</span>
                                <span style={{ color: "#fff" }}> ...</span>
                            </div>
                            <div className={styles["detail-film-info-genres"]}>
                                <span className={styles["detail-film-info-title"]}>Genres:</span>
                                <span className={styles["detail-film-info-name"]}> Action,</span>
                                <span className={styles["detail-film-info-name"]}> Aventure,</span>
                                <span className={styles["detail-film-info-name"]}> Science Fiction.</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Category */}
                <div className={styles["wrap-detail-film-info"]}>
                    <div className={styles["detail-film-recommend"]}>
                        <span className={styles["detail-film-recommend-title"]}>Recommendation</span>
                        <div className={styles["detail-film-recommend-item"]}>
                            <RecommendationCategory data={data}></RecommendationCategory>
                            <RecommendationCategory data={data}></RecommendationCategory>
                            <RecommendationCategory data={data}></RecommendationCategory>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className={styles["wrap-detail-film-info"]}>
                    <div className={styles["wrap-detail-film-final"]}>
                        <h6 className={styles["wrap-detail-film-final-more-info"]}>More info about Eternals</h6>
                        <p className={styles["detail-film-info-title"]} style={{ marginTop: 10 }}>
                            Director:<span className={styles["detail-film-info-name"]}> Chloé Zhao.</span>
                        </p>
                        <p className={styles["detail-film-info-title"]} style={{ marginTop: 10 }}>
                            Actor:
                            <span className={styles["detail-film-info-name"]}> Gemma Chan, Richard Madden, Angelina Jolie, Kumail Nanjiani, Barry Keoghan, Lauren Ridloff, Lia McHugh, Brian Tyree Henry, Ma Dong-seok, Salma Hayek, Kit Harington, Harish Patel, David Kaye, Bill Skarsgård, Haaz Sleiman, Esai Daniel Cross, Alan Scott, Hannah Dodd, Adria Escudero, Sebastián Viveros, Nikkita Chadha, Grahame Fox, Zain Al Rafeea, Alberto Rodríguez, Lucia Efstathiou, Derek Horsham, Jeff Mirza, Ascension Martinez Rubio, Ozer Ercan, Ariadna Vadillo Soto, Orson Rosenberg, Harry Styles, Patton Oswalt, Brenda Lorena Garcia, Sebastian Senior, Chloe Stannage, Mahershala Ali.</span>
                        </p>
                        <p className={styles["detail-film-info-title"]} style={{ marginTop: 10 }}>
                            Genre:
                            <span className={styles["detail-film-info-name"]}> Action, Adventure, Fantasy, Science Fiction.</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default DetailFilm;