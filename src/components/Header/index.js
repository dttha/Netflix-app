import React, { useEffect } from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons'
import avata from '../../assets/images/avata.jpg'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GET_ACCOUNT_FAIL, GET_ACCOUNT_SUCCESS } from '../../constants';

const Header = () => {
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();

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
                                <Link to="/account" className={styles["home-header-detail"]}>
                                    <span>Account</span>
                                </Link>
                                <Link to="/" onClick={() => dispatch({
                                    type: GET_ACCOUNT_FAIL, payload: null
                                })}>
                                    <p className={styles["home-header-logout-mobile"]}>Log out</p>
                                </Link>
                            </div>
                            <ul className={styles["home-header-menu-mobile"]}>
                                <NavLink to="/home" className={({ isActive }) => isActive ? `${styles['home-header-menu-link-active']} ${styles["home-header-menu-link"]}` : styles["home-header-menu-link"]}>Home</NavLink>
                                <NavLink to="/tvshow" className={({ isActive }) => isActive ? `${styles['home-header-menu-link-active']} ${styles["home-header-menu-link"]}` : styles["home-header-menu-link"]}>Tv shows</NavLink>
                                <NavLink to="/movie" className={({ isActive }) => isActive ? `${styles['home-header-menu-link-active']} ${styles["home-header-menu-link"]}` : styles["home-header-menu-link"]}>Movies</NavLink>
                                <NavLink to="/favorite" className={({ isActive }) => isActive ? `${styles['home-header-menu-link-active']} ${styles["home-header-menu-link"]}` : styles["home-header-menu-link"]}>Favorite</NavLink>
                            </ul>
                        </div>
                        <div className={styles["home-header-content-logo"]}>
                            Netflix
                        </div>
                        <ul className={styles["home-header-menu"]} id="home-header-menu">
                            <NavLink to="/home" className={({ isActive }) => isActive ? `${styles['home-header-menu-link-active']} ${styles["home-header-menu-link"]}` : styles["home-header-menu-link"]}>Home</NavLink>
                            <NavLink to="/tvshow" className={({ isActive }) => isActive ? `${styles['home-header-menu-link-active']} ${styles["home-header-menu-link"]}` : styles["home-header-menu-link"]}>Tv shows</NavLink>
                            <NavLink to="/movie" className={({ isActive }) => isActive ? `${styles['home-header-menu-link-active']} ${styles["home-header-menu-link"]}` : styles["home-header-menu-link"]}>Movies</NavLink>
                            <NavLink to="/favorite" className={({ isActive }) => isActive ? `${styles['home-header-menu-link-active']} ${styles["home-header-menu-link"]}` : styles["home-header-menu-link"]}>Favorite</NavLink>
                        </ul>
                    </div>
                    <div className={styles["home-header-content-right"]}>
                        <div className={isActive ? styles["home-header-search-icon"] + " " + styles["hidden"] : styles["home-header-search-icon"]} onClick={() => setActive(!isActive)}>
                            <FontAwesomeIcon icon={faSearch} style={{ color: "#fff" }}></FontAwesomeIcon>
                        </div>
                        <div className={!isActive ? styles["home-search-group"] : styles["home-search-group"] + " " + styles["show"]}>
                            <FontAwesomeIcon icon={faSearch} style={{ color: "#fff" }}></FontAwesomeIcon>
                            <input placeholder={"Movie, Tvshow, Actor"} type="text" style={{ color: "#fff", padding: "2px 8px", outline: "none", border: "none", backgroundColor: "rgba(0,0,0,0)" }}></input>
                            <button className={styles["mobile-btn-search"]}>Search</button>
                        </div>
                        <div className={styles["home-header-avata-group"]}>
                            <div className={styles["home-header-avata"]}>
                                <img src={avata} style={{ display: "block", width: "100%" }}></img>
                            </div>
                            <p className={styles["home-header-username"]} >Thu Hà</p>
                            <FontAwesomeIcon icon={faSortDown} className={styles["home-header-span-down"]}></FontAwesomeIcon>
                            <div className={styles["home-header-dropdown"]}>
                                <Link to="/account" className={styles["home-header-detail"]}>
                                    <span>Account</span>
                                </Link>
                                <Link to="/" className={styles["home-header-detail"]}>
                                    <span>Log out</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles["home-mobile-search-group"]}>
                        <FontAwesomeIcon icon={faSearch} style={{ color: "#fff" }}></FontAwesomeIcon>
                        <input placeholder={"Movie, Tvshow, Actor"} type="text" style={{ color: "#fff", padding: "2px 8px", outline: "none", border: "none", backgroundColor: "rgba(0,0,0,0)" }}></input>
                        <button className={styles["mobile-btn-search"]}>Search</button>
                    </div>
                </div >

            </div >
        </div >
    )
}

export default Header