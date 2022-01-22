import React from 'react';
import SingleFilm from '../SingleFilm';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Navigation from 'swiper/css/navigation';
import Pagination from 'swiper/css/pagination';
import Scrollbar from 'swiper/css/scrollbar';
import A11y from 'swiper/css/a11y';

const Category = () => {
    return (
        <div className={styles["home-wrap-category"]}>
            <div className={styles["home-category"]}>
                <div className={styles["container"]}>
                    <div className={styles["home-category-type"]}>Popular Movies</div>
                    <div className={styles["home-category-content"]}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <a href="#/home/movie/524434">
                                    <SingleFilm></SingleFilm>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#/home/movie/524434">
                                    <SingleFilm></SingleFilm>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#/home/movie/524434">
                                    <SingleFilm></SingleFilm>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#/home/movie/524434">
                                    <SingleFilm></SingleFilm>
                                </a>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Category