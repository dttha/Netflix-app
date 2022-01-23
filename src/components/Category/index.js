import React from 'react';
import SingleFilm from '../SingleFilm';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Category = ({ data }) => {
    return (
        <div className={styles["home-wrap-category"]}>
            <div className={styles["home-category"]}>
                <div className={styles["container"]}>
                    <div className={styles["home-category-type"]}>Popular Movies</div>
                    <div className={styles["home-category-content"]}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={8}
                            slidesPerView={5}
                            pagination={{
                                clickable: true,
                            }}
                            className={styles["swiper-container"] + " swiper-container"}
                            navigation
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 8
                                },
                                400: {
                                    slidesPerView: 2,
                                    spaceBetween: 8
                                },
                                800: {
                                    slidesPerView: 4,
                                    spaceBetween: 8
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 8
                                }
                            }
                            }
                        >
                            {data && data.map((item) => {
                                return <SwiperSlide>
                                    <SingleFilm singleFilm={item}></SingleFilm>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Category