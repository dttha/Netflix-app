import React from 'react';
import styles from './styles.module.css'

const StartHome = () => {
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
                                            <div className={styles["wrap-email-text"]}>
                                                <input className={styles["wrap-input"]} type="text" />
                                                <p className={styles["wrap-input-placeholde"]}>Username or phone</p>
                                            </div>
                                            <a className={styles["btn"]}>Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartHome