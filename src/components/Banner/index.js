import React from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HOME_GET_TRAILER } from '../../constants';
import { URLs } from '../../constants/urls';

const Banner = ({ detailMovie }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onClickTrailer = (e) => {
        dispatch({ type: HOME_GET_TRAILER, payload: detailMovie?.id })
    };
    return (
        <div className={styles["banner"]}>
            <div className={styles["home-banner"]} style={{
                backgroundImage: detailMovie?.backdrop_path ? `linear-gradient(0deg,rgb(0, 0, 0) 0px,
                        rgba(0, 0, 0, 0.4) 100%), url("${URLs.baseImage}/${detailMovie?.backdrop_path}")` : 'unset'
            }}>
                <div className={styles["home-banner-content"]}>
                    <div className={styles["container"]}>
                        <h6 className={styles["home-banner-title"]}>{detailMovie?.original_title}</h6>
                        <p className={styles["home-banner-desc"]}>
                            {detailMovie?.overview}
                        </p>
                        <div className={styles["home-banner-btn"]} >
                            <div onClick={onClickTrailer} className={styles["btn-trailer"]} id="btn-trailer" >
                                <FontAwesomeIcon icon={faCaretRight} style={{ marginRight: 10, fontSize: 20 }}></FontAwesomeIcon>
                                <span>Trailer</span>
                            </div>
                            <Link to={`${location.pathname}/movie/${detailMovie?.id}`} className={styles["btn-more-info"]}>
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
            </div >
        </div>
    )
}

export default Banner