import React from 'react';
import styles from './styles.module.css'

const Footer = () => {
    return (
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
    )
}

export default Footer