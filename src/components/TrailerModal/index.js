import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { HOME_GET_TRAILER } from '../../constants';
import styles from './styles.module.css'

const TrailerModal = () => {
    const trailerModal = useSelector((state) => state.film.trailer)
    const dispatch = useDispatch()
    return (
        <div>
            {trailerModal &&
                <div className={styles['wrapper']}>
                    <iframe onClick={(e) => {
                        e.stopPropagation()
                    }}
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
