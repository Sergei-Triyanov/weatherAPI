import React from "react";
import DayConvector from "../function/day";

import styles from './forecast.module.css'

const Forecast = ({ pressure, temp, wind, temperatureImageRender }) =>{
    const temperature = temp.value;
    const formatTemperature = temp.format;

    return(
        <div className={styles.forecast}>

            <div className={styles.day}>{DayConvector()}</div>

            <ul className={styles.forecast__item}>

                <li className={styles.inner}>
                    <p className={styles.inner__title}>pressure</p>
                    <div className={styles.text}>{pressure} <span>hPa</span></div>
                </li>

                <li className={styles.inner}>
                    <p className={styles.inner__title}>temperature</p>
                    <div className={styles.inner__svg}>
                        <div className={styles.text}>{`${temp.value} ${temp.format}`}</div>
                        <svg className={styles.svg}>{temperatureImageRender(temperature, formatTemperature)}</svg>
                    </div>
                </li>

                <li className={styles.inner}>
                    <p className={styles.inner__title}>wind speed</p>
                    <div className={styles.inner__svg}>
                        <div className={styles.text}>{wind} <span>m/s</span></div>
                        <svg className={styles.svg} width="32" height="32" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.51462 3.14645C5.51462 1.4896 6.85896 0.146454 8.51728 0.146454C10.1756 0.146454 11.5199 1.4896 11.5199 3.14645V3.64645C11.5199 5.57945 9.95154 7.14645 8.01684 7.14645H1.51108C0.958305 7.14645 0.510193 6.69874 0.510193 6.14645C0.510193 5.59417 0.958305 5.14645 1.51108 5.14645H8.01684C8.846 5.14645 9.51816 4.47488 9.51816 3.64645V3.14645C9.51816 2.59417 9.07005 2.14645 8.51728 2.14645C7.9645 2.14645 7.51639 2.59417 7.51639 3.14645V3.41918C7.51639 3.97147 7.06828 4.41918 6.51551 4.41918C5.96273 4.41918 5.51462 3.97147 5.51462 3.41918V3.14645ZM9.51728 15.6465C9.51728 17.5795 11.0857 19.1465 13.0204 19.1465C14.9551 19.1465 16.5235 17.5795 16.5235 15.6465V15.1465C16.5235 12.9373 14.731 11.1465 12.5199 11.1465H2.51108C1.9583 11.1465 1.51019 11.5942 1.51019 12.1465C1.51019 12.6987 1.9583 13.1465 2.51108 13.1465H12.5199C13.6255 13.1465 14.5217 14.0419 14.5217 15.1465V15.6465C14.5217 16.4749 13.8495 17.1465 13.0204 17.1465C12.1912 17.1465 11.5191 16.4749 11.5191 15.6465V15.1465C11.5191 14.5942 11.0709 14.1465 10.5182 14.1465C9.96539 14.1465 9.51728 14.5942 9.51728 15.1465V15.6465ZM3.51285 8.14645C2.96008 8.14645 2.51196 8.59417 2.51196 9.14645C2.51196 9.69874 2.96008 10.1465 3.51285 10.1465H13.5217C14.0745 10.1465 14.5226 9.69874 14.5226 9.14645C14.5226 8.59417 14.0745 8.14645 13.5217 8.14645H3.51285Z" fill="#231815"/>
                        </svg>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Forecast;