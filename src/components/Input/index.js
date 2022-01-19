import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
function Input({ value, onChange, styleContainer, styleInput, styleLabel, label, ...props }) {
    const [state, setState] = useState('')
    const keyInput = useRef("input-" + Math.random())
    const labelRef = useRef()
    const valueInput = value || state

    const changeState = (e) => {
        setState(e.target.value)
        onChange?.(e.target.value)
    }

    useEffect(() => {
        // thực thi ngay sau khi dependency thay đổi
        if (valueInput === '') {
            labelRef.current.classList.remove(styles['wrap-input-placeholder-top'])
        }

        return () => {
            // thực thi ngay trước khi dependency thay đổi
            if (valueInput === '') {
                labelRef.current.classList.add(styles['wrap-input-placeholder-top'])
            }
        }
    }, [valueInput])

    useLayoutEffect(() => {
        if (valueInput !== '') {
            labelRef.current.classList.add(styles['wrap-input-placeholder-top'])
        }
    }, [])

    return <div className={styles["wrap-email-text"]} style={styleContainer ?? {}}>
        <input {...props}
            style={styleInput ?? {}}
            className={styles["wrap-input"]}
            type="text"
            id={keyInput.current}
            value={valueInput}
            onChange={changeState}
        />
        <label style={styleLabel ?? {}} ref={labelRef} htmlFor={keyInput.current} className={styles["wrap-input-placeholde"]}>{label}</label>
    </div>
}

export default Input;