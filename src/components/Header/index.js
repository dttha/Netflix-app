import React, { useEffect } from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons'
import avata from '../../assets/images/avata.jpg'

const Header = () => {
    useEffect(() => {
        const header = document.getElementById("nav")
        window.addEventListener("scroll", (e) => {
            header.style.background = `rgba(0, 0, 0,${window.scrollY / 500})`
        })
        const btnMenu = document.getElementById("btn-menu")
        const menu = document.getElementById("home-header-menu-open")
        btnMenu.addEventListener("click", () => {
            menu.classList.toggle(styles["open"])
        })
    }, [])

    return (
        <div className={styles["header"] + " " + styles["position-fixed"]}>
            <div className={styles["header-nav"]} id="nav">
                <div className={styles["home-header"]}>
                    <div className={styles["home-header-content-left"]}>
                        <button id="btn-menu" style={{ background: "transparent", border: 'none', color: "#fff", fontSize: 30, marginRight: 10 }}>
                            <FontAwesomeIcon className={styles["nav-icon"]} icon={faBars}></FontAwesomeIcon>
                        </button>
                        <div className={styles["home-header-menu-open"]} id="home-header-menu-open">
                            <div className={styles["home-header-user"]}>
                                <div className={styles["home-header-avata-mobile"]}>
                                    <div className={styles["home-header-avata"]}>
                                        <img src={avata} style={{ display: "block", width: "100%" }}></img>
                                    </div>
                                    <p className={styles["home-header-username"]} >Thu Hà</p>
                                </div>
                                <a className={styles["home-header-detail"]} href="#">
                                    <span>Account</span>
                                </a>
                                <p className={styles["home-header-logout-mobile"]}>Log out</p>
                            </div>
                            <ul className={styles["home-header-menu-mobile"]}>
                                <a href="#home" className={styles["home-header-menu-link"] + " " + styles["home-header-menu-link-active"]}>Home</a>
                                <a href="#tvshow" className={styles["home-header-menu-link"]}>Tv shows</a>
                                <a href="#movie" className={styles["home-header-menu-link"]}>Movies</a>
                                <a href="#favorite" className={styles["home-header-menu-link"]}>Favorite</a>
                            </ul>
                        </div>
                        <div className={styles["home-header-content-logo"]}>
                            Netflix
                        </div>
                        <ul className={styles["home-header-menu"]} id="home-header-menu">
                            <a href="#home" className={styles["home-header-menu-link"] + " " + styles["home-header-menu-link-active"]}>Home</a>
                            <a href="#tvshow" className={styles["home-header-menu-link"]}>Tv shows</a>
                            <a href="#movie" className={styles["home-header-menu-link"]}>Movies</a>
                            <a href="#favorite" className={styles["home-header-menu-link"]}>Favorite</a>
                        </ul>
                    </div>
                    <div className={styles["home-mobile-search-group"]}>
                        <FontAwesomeIcon icon={faSearch} style={{ color: "#fff", padding: 5 }}></FontAwesomeIcon>
                        <input placeholder={"Movie, Tvshow, Actor"} type="text" style={{ color: "#fff", padding: "2px 8px", outline: "none", border: "none", backgroundColor: "rgba(0,0,0,0)" }}></input>
                        <button className={styles["mobile-btn-search"]}>Search</button>
                    </div>
                    <div className={styles["home-header-content-right"]}>
                        <div className={styles["home-header-search-icon"]}>
                            <FontAwesomeIcon icon={faSearch} style={{ color: "#fff", padding: 5, marginRight: 20 }}></FontAwesomeIcon>
                        </div>
                        <div className={styles["home-header-avata-group"]}>
                            <div className={styles["home-header-avata"]}>
                                <img src={avata} style={{ display: "block", width: "100%" }}></img>
                            </div>
                            <p className={styles["home-header-username"]} >Thu Hà</p>
                            <FontAwesomeIcon icon={faSortDown} className={styles["home-header-span-down"]}></FontAwesomeIcon>
                            <div className={styles["home-header-dropdown"]}>
                                <a className={styles["home-header-detail"]} href="#">
                                    <span>Account</span>
                                </a>
                                <p className={styles["home-header-detail"]}>
                                    <span>Log out</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header