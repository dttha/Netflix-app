import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import styles from './styles.module.css'

const SignIn = () => {
    const [value, setValue] = useState('');

    useEffect(() => {
    }, [value])

    const [visible, setVisible] = useState(false);

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["login"]}>
                <div className={styles["container"]}>
                    <div className={styles["login-content"]}>
                        <div className={styles["login-content-header"]}>
                            <a href="#" className={styles["logo"]}>Netflix</a>
                        </div>
                        <div className={styles["login-content-form"]}>
                            <h6 className={styles["form-title"]}>Sign In</h6>
                            <Input label="Username or phone" value={value} onChange={setValue} styleInput={{ padding: "18px 20px", borderRadius: 4 }} />
                            <div className={styles["login-content-btn"]}>
                                <p className={styles["p-font"]}>Sign In</p>
                            </div>
                            <p className={styles["login-content-register"]}>
                                If you want to disconnect the app, go to the main
                                <a href="#">
                                    <span className={styles["login-span"]}> Website,</span>
                                </a>
                                <span className={styles["login-span"]} style={{ color: "rgb(140,140,140)" }}> go to setting then choose the session, go to API tab and delete the app that you want to disconnect.</span>
                            </p>
                            <p className={styles["login-content-register"]}>New to Netflix?
                                <span className={styles["login-span"]}> Sign up now.</span>
                            </p>
                            <p className={styles["login-content-more"]}>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                                <span className={styles["login-span"]} onClick={() => setVisible(true)}> Learn more.</span>
                            </p>
                            {visible && <p className={styles["login-content-policy"]}>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>}

                        </div>

                    </div>
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
        </div>
    )
}

export default SignIn