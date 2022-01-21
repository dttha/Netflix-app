import React from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import avata from '../../assets/images/avata.jpg'

const Header = () => {
    return (
        <div className={styles["home-header"]}>
            <div className={styles["home-header-content-left"]}>
                <div className={styles["home-header-content-logo"]}>
                    Netflix
                </div>
                <ul className={styles["home-header-menu"]}>
                    <a href="#home" className={styles["home-header-menu-link"] + " " + styles["home-header-menu-link-active"]}>Home</a>
                    <a href="#tvshow" className={styles["home-header-menu-link"]}>Tv shows</a>
                    <a href="#movie" className={styles["home-header-menu-link"]}>Movies</a>
                    <a href="#favorite" className={styles["home-header-menu-link"]}>Favorite</a>
                </ul>
            </div>
            <div className={styles["home-header-content-right"]}>
                <div className={styles["home-header-search-icon"]}>
                    <FontAwesomeIcon icon={faSearch} style={{ color: "#fff", padding: 5, marginRight: 20 }}></FontAwesomeIcon>
                </div>
                <div className={styles["home-header-avata-group"]}>
                    <div className={styles["home-header-avata"]}>
                        <img src={avata} style={{ display: "block", width: "100%" }}></img>
                    </div>
                    <span className={styles["home-header-span-down"]}></span>
                    <p className={styles["home-header-username"]} >Thu Hà</p>
                </div>
            </div>
        </div>
    )
}

export default Header