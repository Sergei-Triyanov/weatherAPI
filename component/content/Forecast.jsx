import React from "react";
import DayConvector from "../function/day";

import styles from './forecast.module.css'

const Forecast = ({ pressure, temp, wind, temperatureImageRender, day }) =>{

    const temperature = (function (){
        if (temp){
            return {
                'value' : temp.value,
                'format' : temp.format,
            }
        }
        return {
            'value' : '',
            'format' : '',
        }
    })()

    return(
        <div className={styles.forecast}>

            <div className={styles.day}>{DayConvector('full',day)}</div>

            <ul className={styles.forecast__item}>

                <li className={styles.inner}>
                    <p className={styles.inner__title}>pressure</p>
                    <div className={styles.text}>{pressure} <span>hPa</span></div>
                </li>

                <li className={styles.inner}>
                    <p className={styles.inner__title}>temperature</p>
                    <div className={styles.inner__svg}>
                        <div className={styles.text}>{`${temperature.value} ${temperature.format}`}</div>
                        <svg className={styles.svg}>{temperatureImageRender(temperature.value, temperature.format)}</svg>
                    </div>
                </li>

                <li className={styles.inner}>
                    <p className={styles.inner__title}>wind speed</p>
                    <div className={styles.inner__svg}>
                        <div className={styles.text}>{wind} <span>m/s</span></div>
                        <svg className={styles.svg} width="32" height="32" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        </svg>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Forecast;