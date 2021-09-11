import React from "react";
import PropTypes from "prop-types";
import styles from "./dayPage.module.css"
import TodayPage from "./TodayPage";
import TomorrowPage from "./TomorrowPage";

const DayPage = props => {

    if(props.error) {
        return <div className={`${styles.container} ${styles.title}`}>{props.error}</div>
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>{props.weather.city}</h1>
            <div className={styles.card}>
                {props.day
                    ? <TomorrowPage
                    getListWeatherTomorrow={props.getListWeatherTomorrow}
                    formatTemp={props.formatTemp}
                    temperatureImageRender={props.temperatureImageRender}
                    day={props.day}
                    />
                    : <TodayPage
                    pressure={props.pressure}
                    temp={props.temp}
                    wind={props.wind}
                    temperatureImageRender={props.temperatureImageRender}
                    day={props.day}
                    icon={props.weather.icon}
                    humidity={props.humidity}
                />}
            </div>
            <div className={styles.map}></div>
        </div>
    )

}

DayPage.prototype = {
    weather: PropTypes.object,
    city: PropTypes.string
}

export default DayPage;