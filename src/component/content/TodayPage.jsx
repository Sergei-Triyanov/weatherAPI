import React from "react";
import PropTypes from "prop-types";
import styles from './todayPage.module.css'

const TodayPage = props => {

    const weather = props.weather
    const error = props.error

    if(error) {
        return <div className={`${styles.container} ${styles.title}`}>{props.error}</div>
    }
    else{
        const checkValidTemp = () => {
            if(Array.isArray(props.temp)){
                return `${props.temp[0].value} ${props.temp[0].format}`
            }
        }

        return(
            <div className={styles.container}>
                <h1 className={styles.title}>{weather.city}</h1>
                <div className={styles.card}>
                    <img
                    src={`https://openweathermap.org/img/w/${weather.icon}.png`}
                    width={'60px'}
                    height={'60px'}
                    alt={'weather icon'}
                    />
                    {checkValidTemp()}
                </div>
                <div className={styles.map}></div>
            </div>
        )
    }
}

TodayPage.prototype = {
    weather: PropTypes.object,
    city: PropTypes.string
}

export default TodayPage;