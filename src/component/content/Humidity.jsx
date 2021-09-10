import React from "react";
import styles from './humidity.module.css'

const Humidity = ({humidity, icon})=> {

    const srcImage = `https://openweathermap.org/img/w/${icon}.png`;

    return(
        <div className={styles.humidity}>
            <img
                className={styles.item}
                src={srcImage}
                alt="weather"
                width={'76px'}
                height={'76px'}
            />
            <div className={styles.card__humidity}>
                <h2 className={styles.item__title}>Humidity</h2>
                <p className={styles.humidity__point}>{humidity}%</p>
            </div>
        </div>
    )
}

export default Humidity;