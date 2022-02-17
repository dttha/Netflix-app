import React from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faChevronDown, faChevronUp, faHeart, faStar, faTimes, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import RecommendationCategory from '../RecommendationCategory';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HOME_GET_ACTOR, HOME_GET_MOVIE_DETAIL, HOME_GET_RECOMMEND_FILM, HOME_GET_TRAILER } from '../../constants';
import { URLs } from '../../constants/urls';

const DetailFilm = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [visible, setVisible] = useState(false);
    const [isActive, setActive] = useState(false);
    const detailMovie = useSelector((state) => state.film.detailMovie)
    const actor = useSelector((state) => state.film.actor)
    const listRecommendFilm = useSelector((state) => state.film.listRecommendFilm)
    const dispatch = useDispatch()
    useEffect(() => {
        const btnLike = document.getElementById("btn-like")
        const faHeart = document.getElementById("faHeart")
        btnLike.addEventListener("click", () => {
            faHeart.classList.toggle(styles["activeHeart"])
        })
    }, [])
    useEffect(() => {
        dispatch({ type: HOME_GET_MOVIE_DETAIL, payload: id })
        dispatch({ type: HOME_GET_ACTOR, payload: id })
        dispatch({ type: HOME_GET_RECOMMEND_FILM, payload: id })
    }, [])
    const upRef = useRef(null)

    const handleClickUp = (e) => {
        upRef.current.classList.remove(styles["detail-film-recommend-add"]);
        setVisible(false);
    };

    const handleClickDown = (e) => {
        upRef.current.classList.add(styles["detail-film-recommend-add"]);
        setVisible(true);
    };

    const onToggleClick = (e) => {
        dispatch({ type: HOME_GET_TRAILER, payload: id })
    };

    return (
        <div className={styles["wrapper"]} onClick={() => {
            navigate(-1)
        }}>
            {/* ngăn sự kiện sủi bọt trong các thành phần lồng nhau khi nhấp chuột */}
            <div className={styles["detail-film"]} onClick={(e) => {
                e.stopPropagation()
            }}>
                {/* Banner */}
                <div className={styles["detail-film-background-img"]} style={{
                    backgroundImage: detailMovie.backdrop_path ? `linear-gradient(0deg,rgb(0, 0, 0) 0px,
                        rgba(0, 0, 0, 0) 100%), url("${URLs.baseImage}/${detailMovie?.backdrop_path}")` : 'unset'
                }}
                >
                    <div className={styles["detail-film-title"]}>
                        <h4 className={styles["detail-film-name"]}>{detailMovie?.original_title}</h4>
                        <div className={styles["detail-film-btn"]} >
                            <div className={styles["btn-trailer"]} onClick={onToggleClick}>
                                <FontAwesomeIcon icon={faCaretRight} style={{ marginRight: 10, fontSize: 20 }}></FontAwesomeIcon>
                                <span>Trailer</span>
                            </div>
                            <div className={styles["detail-film-btn-feel"]}>
                                <div className={styles["btn-like"]} id="btn-like">
                                    <FontAwesomeIcon icon={faHeart} className={styles["faHeart"]} id="faHeart"></FontAwesomeIcon>
                                </div>
                                <div className={styles["btn-rate"]} onClick={() => setActive(true)} onBlur={() => setActive(false)} tabIndex={0}>
                                    <FontAwesomeIcon icon={faStar} className={styles["faStar"]}></FontAwesomeIcon>
                                    <div className={!isActive ? styles["rating"] : styles["rating"] + " " + styles["activeStar"]} onClick={(e) => {
                                        e.stopPropagation()
                                    }}>
                                        <FontAwesomeIcon icon={faWindowClose} className={styles["faWindowClose"]}></FontAwesomeIcon>
                                        <div className={styles["rating-group"]}>
                                            {Array(10).fill({}).map((item, index) => <FontAwesomeIcon key={index} icon={faStar} className={styles["faStar-group"]} onClick={() => { }}></FontAwesomeIcon>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["btn-close"]} onClick={() => {
                        navigate(-1)
                    }}>
                        <FontAwesomeIcon icon={faTimes} style={{ color: "white", fontSize: "30px" }}></FontAwesomeIcon>
                    </div>
                </div>
                {/* Infomation */}
                <div className={styles["wrap-detail-film-info"]}>
                    <div className={styles["detail-film-info"]}>
                        <div className={styles["detail-film-info-left"]}>
                            <div className={styles["detail-film-info-date"]}>
                                <span className={styles["detail-film-info-date-release"]}>{detailMovie.release_date}</span>
                                <span className={styles["detail-film-info-date-time"]}>{`${Math.floor(detailMovie?.runtime / 60)}h
                                              ${detailMovie.runtime % 60}p`}</span>
                            </div>
                            <span className={styles["detail-film-info-rating"]}>
                                Rating: {detailMovie?.vote_average}
                            </span>
                            <p className={styles["detail-film-info-desc"]}>
                                {detailMovie.overview}
                            </p>
                        </div>
                        <div className={styles["detail-film-info-right"]}>
                            <div className={styles["detail-film-info-actors"]}>
                                <span className={styles["detail-film-info-title"]}>Actors:
                                    {actor.cast && actor.cast.filter((item, index) => index < 4).map((item, index) => {
                                        return <span key={"actor" + index} className={styles["detail-film-info-name"]}>{item.name},{' '}</span>
                                    })
                                    }
                                </span>
                                {actor.cast?.length > 4 && <span style={{ color: 'white' }}>...</span>}
                            </div>
                            <div className={styles["detail-film-info-genres"]}>
                                <span className={styles["detail-film-info-title"]}>Genres:
                                    {detailMovie.genres?.map((item, index) => {
                                        if (index !== (detailMovie.genres && detailMovie.genres?.length - 1))
                                            return <Link to={`/movie/${item.id}`} key={"genres" + index} className={styles["detail-film-info-name"]}> {item.name},{' '}</Link>
                                        else
                                            return <Link to={`/movie/${item.id}`} key={"genres" + index} className={styles["detail-film-info-name"]}>{item.name}.</Link>
                                    })
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Category */}
                <div className={styles["wrap-detail-film-info"]}>
                    <div className={styles["detail-film-recommend"]} ref={upRef}>
                        <span className={styles["detail-film-recommend-title"]}>Recommendation</span>
                        <RecommendationCategory data={listRecommendFilm}></RecommendationCategory>
                    </div>
                    <div className={styles["detail-film-recommend-more-btn"]}>
                        <div className={styles["detail-film-recommend-more-wrap-icon"]}>
                            {!visible && <FontAwesomeIcon icon={faChevronDown} className={styles["faChevronDown"]} onClick={handleClickDown}></FontAwesomeIcon>}
                            {visible && <FontAwesomeIcon icon={faChevronUp} className={styles["faChevronUp"]} onClick={handleClickUp}></FontAwesomeIcon>}
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className={styles["wrap-detail-film-info"]}>
                    <div className={styles["wrap-detail-film-final"]}>
                        <h6 className={styles["wrap-detail-film-final-more-info"]}>More info about {detailMovie.original_title}</h6>
                        <p className={styles["detail-film-info-title"]} style={{ marginTop: 10 }}>
                            Director:<span className={styles["detail-film-info-name"]}>
                                {actor.crew && actor.crew.filter((item, index) => index < 3).map((item, index) => {
                                    return <span key={"crew" + index} className={styles["detail-film-info-name"]}> {item.name},{' '}</span>
                                })
                                }
                            </span>
                            {actor.crew?.length > 3 && <span style={{ color: 'white' }}>...</span>}
                        </p>
                        <p className={styles["detail-film-info-title"]} style={{ marginTop: 10 }}>
                            Actor:
                            <span className={styles["detail-film-info-name"]}>
                                {actor.cast && actor.cast?.map((item, index) => {
                                    if (index !== (actor.cast && actor.cast?.length - 1))
                                        return <span key={"actor" + index} className={styles["detail-film-info-name"]}> {item.name},{' '}</span>
                                    else
                                        return <span key={"actor" + index} className={styles["detail-film-info-name"]}>{item.name}.</span>
                                })
                                }
                            </span>
                        </p>
                        <p className={styles["detail-film-info-title"]} style={{ marginTop: 10 }}>
                            Genres:
                            <span className={styles["detail-film-info-name"]}>
                                {detailMovie.genres?.map((item, index) => {
                                    if (index !== (detailMovie.genres && detailMovie.genres?.length - 1))
                                        return <Link to={`/movie/${item.id}`} key={index} className={styles["detail-film-info-name"]}> {item.name},{' '}</Link>
                                    else
                                        return <Link to={`/movie/${item.id}`} key={index} className={styles["detail-film-info-name"]}>{item.name}.</Link>
                                })
                                }
                            </span>
                        </p>

                    </div>
                </div>
            </div>
        </div >

    );
}

export default DetailFilm;
