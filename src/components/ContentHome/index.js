import React from 'react';
import SwiperHome from '../SwiperHome';
import styles from './styles.module.css'

const ContentHome = () => {
    const data = [
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title1"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title2"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title3"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title4"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title5"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title6"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title2"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title3"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title4"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title5"
        },
        {
            image: 'https://themoviedb.org/t/p/w355_and_h200_multi_faces//EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            title: "title6"
        }
    ]
    return (
        <div className={styles["wrapper"]}>
            <SwiperHome data={data}></SwiperHome>
            <SwiperHome data={data}></SwiperHome>
            <SwiperHome data={data}></SwiperHome>
        </div>
    )
}

export default ContentHome