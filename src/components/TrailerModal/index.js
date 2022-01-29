import React from 'react';
import styles from './styles.module.css'

const TrailerModal = () => {
    return (<iframe onClick={(e) => {
        e.stopPropagation()
    }}
        src="https://www.youtube.com/embed/Bh8NeyejykU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className={styles["jframe"]}
    >
    </iframe>

    );
}

export default TrailerModal;
