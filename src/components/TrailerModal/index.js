import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { HOME_GET_TRAILER } from '../../constants';
import styles from './styles.module.css'

const TrailerModal = () => {
    const [isActive, setActive] = useState(false);
    const trailerModal = useSelector((state) => state.film.trailer)
    const dispatch = useDispatch()
    const { id } = useParams();
    useEffect(() => {
        dispatch({ type: HOME_GET_TRAILER, payload: id })
    }, [])
    return (
        <div>
            {trailerModal &&
                <div className={!isActive ? styles["wrapper"] : styles["wrapper"] + " " + styles["wrapper-hidden"]} onClick={() => setActive(!isActive)} tabIndex={0}>
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${trailerModal.key}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className={styles["jframe"]}
                    >
                    </iframe>
                </div>}
        </div>
    );
}

export default TrailerModal;
