import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'
import image from "../../assets/images/tv.png";
import video1 from "../../assets/videos/video-tv-1.m4v"
import mobile1 from "../../assets/images/mobile-01.jpg"
import film1 from "../../assets/images/film1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/Input'
import Collapse from '../../components/Collapse';
const StartHome = () => {
    const [value, setValue] = useState('');

    useEffect(() => {
        console.log(value);
    }, [value])

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["banner"]}>
                <div className={styles["container"]}>
                    <div className={styles["banner-content"]}>
                        <div className={styles["banner-content-header"]}>
                            <a href="#" className={styles["logo"]}>Netflix</a>
                            <a href="#sign-in" className={styles["banner-content-signin"]}>Sign in</a>
                        </div>

                        <div className={styles["banner-content-wrap-text"]}>
                            <div className={styles["banner-content-text"]}>
                                <div className={styles["banner-main-text"]}>
                                    <h5>Unlimited movies, TV shows, and more.</h5>
                                    <h6>Watch anywhere. Cancel anytime.</h6>
                                </div>

                                <div className={styles["banner-content-description"]}>
                                    <p>Ready to watch? Enter your email to create or restart your membership.</p>

                                    <div className={styles["banner-input"]}>
                                        <div className={styles["emailBar"]}>
                                            <Input label="Username or phone" value={value} onChange={setValue} />
                                            <a className={styles["btn"]}>Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["feature-content"]}>
                <div className={styles["feature-content-page"]}>
                    <div className={styles["feature-content-wrap"]}>
                        <div className={styles["feature-content-text"]}>
                            <h5 className={styles["feature-content-text-title"]}>Enjoy on your TV.</h5>
                            <p className={styles["feature-content-text-desc"]}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>

                        <div className={styles["feature-content-media"]}>
                            <img src={image} style={{ width: "100%", height: "100%", display: "block" }}></img>
                            <div className={styles["feature-content-video"]}>
                                <video autoPlay loop playsInline muted>
                                    <source src={video1} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["feature-content"]}>
                <div className={styles["feature-content-page"]}>
                    <div className={styles["feature-content-wrap"]}>
                        <div className={styles["feature-content-media"]}>
                            <img src={mobile1} style={{ width: "90%", height: "100%", display: "block" }}></img>
                        </div>
                        <div className={styles["feature-content-text"]}>
                            <h5 className={styles["feature-content-text-title"]}>Download your shows to watch offline.</h5>
                            <p className={styles["feature-content-text-desc"]}>Save your favorites easily and always have something to watch.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles["feature-content"]}>
                <div className={styles["feature-content-page"]}>
                    <div className={styles["feature-content-wrap"]}>
                        <div className={styles["feature-content-text"]}>
                            <h5 className={styles["feature-content-text-title"]}>Watch everywhere.</h5>
                            <p className={styles["feature-content-text-desc"]}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>

                        <div className={styles["feature-content-media"]}>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["feature-content"]}>
                <div className={styles["feature-content-page"]}>
                    <div className={styles["feature-content-wrap"]}>
                        <div className={styles["feature-content-media"]}>
                            <img src={film1} style={{ width: "90%", height: "100%", display: "block" }}></img>
                        </div>
                        <div className={styles["feature-content-text"]}>
                            <h5 className={styles["feature-content-text-title"]}>Create profiles for kids.</h5>
                            <p className={styles["feature-content-text-desc"]}>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                        </div>

                    </div>
                </div>
            </div>

            <Collapse />
            <div className={styles["question-email"]}>
                <p className={styles["question-email-title"]}>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className={styles["emailBar"]}>
                    <Input label="Username or phone" value={value} onChange={setValue} />
                    <a className={styles["btn"]}>Get Started</a>
                </div>
            </div>

            <div className={styles["footer"]}>
                <div className={styles["container"]}>
                    <div className={styles["footer-content"]}>
                        <p className={styles["footer-title"]}>Questions? Contact us.</p>

                        <div className={styles["footer-list-category"]}>
                            <div className={styles["footer-col"]}>
                                <div className={styles["footer-col-text"]}>
                                    <p className={styles["footer-text"]}>FAQ</p>
                                    <p className={styles["footer-text"]}>Investor Relations</p>
                                    <p className={styles["footer-text"]}>Privacy</p>
                                    <p className={styles["footer-text"]}>Speed Test</p>
                                </div>
                            </div>

                            <div className={styles["footer-col"]}>
                                <div className={styles["footer-col-text"]}>
                                    <p className={styles["footer-text"]}>Help Center</p>
                                    <p className={styles["footer-text"]}>Jobs</p>
                                    <p className={styles["footer-text"]}>Cookie Preferences</p>
                                    <p className={styles["footer-text"]}>Legal Notices</p>
                                </div>
                            </div>

                            <div className={styles["footer-col"]}>
                                <div className={styles["footer-col-text"]}>
                                    <p className={styles["footer-text"]}>Account</p>
                                    <p className={styles["footer-text"]}>Ways to Watch</p>
                                    <p className={styles["footer-text"]}>Corporate Information</p>
                                    <p className={styles["footer-text"]}>Only on Netflix</p>
                                </div>
                            </div>

                            <div className={styles["footer-col"]}>
                                <div className={styles["footer-col-text"]}>
                                    <p className={styles["footer-text"]}>Media Center</p>
                                    <p className={styles["footer-text"]}>Terms of Use</p>
                                    <p className={styles["footer-text"]}>Contact Us</p>
                                </div>
                            </div>
                        </div>

                        <small className={styles["footer-brand"]}>Netflix</small>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default StartHome