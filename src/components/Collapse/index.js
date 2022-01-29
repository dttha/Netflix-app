import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Collapse() {
    const onToggleClick = function (index) {
        const listCollapsed = document.getElementsByClassName(styles["question-content-show"]);
        Array.from(listCollapsed).forEach(function (item, i) {
            if (i === index) {
                item.classList.toggle(styles["question-content-show-add"]);
            } else {
                item.classList.remove(styles["question-content-show-add"]);
            }
        })
    };

    return <div className={styles["question"]}>
        <div className={styles["question-wrap"]}>
            <div className={styles["question-content"]}>
                <h6 className={styles["question-content-title"]}>Frequently Asked Questions</h6>

                <div className={styles["question-content-dropdown"]}>
                    <div className={styles["question-main"]} onClick={() => { onToggleClick(0) }}>
                        <h6>What is Netflix?</h6>
                        <FontAwesomeIcon icon={faPlus} style={{ fontSize: 10, color: "#fff", width: 20, height: 20 }}></FontAwesomeIcon>
                    </div>

                    <div className={styles["question-content-show"]} >
                        <span className={styles["question-content-desc"]} >Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries,
                            and more on thousands of internet-connected devices.<br /><br />
                            You can watch as much as you want, whenever you want without a single commercial
                            – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                        </span>
                    </div>
                </div>

                <div className={styles["question-content-dropdown"]}>
                    <div className={styles["question-main"]} onClick={() => { onToggleClick(1) }}>
                        <h6>How much does Netflix cost?</h6>
                        <FontAwesomeIcon icon={faPlus} style={{ fontSize: 10, color: "#fff", width: 20, height: 20 }}></FontAwesomeIcon>
                    </div>
                    <div className={styles["question-content-show"]} >
                        <span className={styles["question-content-desc"]}>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                        </span>
                    </div>
                </div>

                <div className={styles["question-content-dropdown"]}>
                    <div className={styles["question-main"]} onClick={() => { onToggleClick(2) }}>
                        <h6>Where can I watch?</h6>
                        <FontAwesomeIcon icon={faPlus} style={{ fontSize: 10, color: "#fff", width: 20, height: 20 }}></FontAwesomeIcon>
                    </div>
                    <div className={styles["question-content-show"]} >
                        <span className={styles["question-content-desc"]}>Watch anywhere, anytime. Sign in with your Netflix account to watch
                            instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app,
                            including smart TVs, smartphones, tablets, streaming media players and game consoles.<br /><br />
                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </span>
                    </div>
                </div>

                <div className={styles["question-content-dropdown"]}>
                    <div className={styles["question-main"]} onClick={() => { onToggleClick(3) }}>
                        <h6>How do I cancel?</h6>
                        <FontAwesomeIcon icon={faPlus} style={{ fontSize: 10, color: "#fff", width: 20, height: 20 }}></FontAwesomeIcon>
                    </div>
                    <div className={styles["question-content-show"]} >
                        <span className={styles["question-content-desc"]}>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </span>
                    </div>
                </div>

                <div className={styles["question-content-dropdown"]}>
                    <div className={styles["question-main"]} onClick={() => { onToggleClick(4) }}>
                        <h6>What can I watch on Netflix?</h6>
                        <FontAwesomeIcon icon={faPlus} style={{ fontSize: 10, color: "#fff", width: 20, height: 20 }}></FontAwesomeIcon>
                    </div>
                    <div className={styles["question-content-show"]} >
                        <span className={styles["question-content-desc"]}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </span>
                    </div>
                </div>

                <div className={styles["question-content-dropdown"]}>
                    <div className={styles["question-main"]} onClick={() => { onToggleClick(5) }}>
                        <h6>Is Netflix good for kids?</h6>
                        <FontAwesomeIcon icon={faPlus} style={{ fontSize: 10, color: "#fff", width: 20, height: 20 }}></FontAwesomeIcon>
                    </div>
                    <div className={styles["question-content-show"]} >
                        <span className={styles["question-content-desc"]}>The Netflix Kids experience is included in your membership to
                            give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br /><br />
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default Collapse;