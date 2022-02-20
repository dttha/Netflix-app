import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import styles from './styles.module.css'
import { GET_ACCOUNT } from "../../constants"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [username, setUserName] = useState("thuha140");
    const isLogin = useSelector((state) => state.user.isLogin)
    const navigate = useNavigate()
    const [password, setPassword] = useState("thuha140");
    const [showPassword, setShowPassword] = useState(false);

    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLogin) {
            navigate('/home')
        }
    }, [isLogin])

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
                            <Input label="Username or phone" value={username} onChange={setUserName} styleInput={{ backgroundColor: "#303030", borderRadius: 4 }} styleContainer={{ maxWidth: "356px" }} />
                            <Input label="Password" value={password} onChange={setPassword} type={showPassword ? "text" : "password"} styleInput={{ backgroundColor: "#303030", borderRadius: 4 }} styleContainer={{ maxWidth: "356px", marginTop: "15px" }} rightComponent={<div onClick={() => setShowPassword(!showPassword)}>SHOW</div>} />
                            <div className={styles["login-content-btn"]}>
                                <div onClick={() => dispatch({
                                    type: GET_ACCOUNT,
                                    payload: {
                                        username,
                                        password
                                    }
                                })} className={styles["p-font"]} >Sign In</div>
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
                                {!visible && <span className={styles["login-span"]} onClick={() => setVisible(true)}> Learn more.</span>}

                            </p>
                            {visible && <p className={styles["login-content-policy"]}>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>}

                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SignIn