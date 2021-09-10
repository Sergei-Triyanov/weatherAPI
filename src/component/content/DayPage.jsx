import React from "react";
import PropTypes from "prop-types";
import styles from "./dayPage.module.css"
import Humidity from "./Humidity";
import Forecast from "./Forecast";

const DayPage = props => {

    if(props.error) {
        return <div className={`${styles.container} ${styles.title}`}>{props.error}</div>
    }
    else{
        return(
            <div className={styles.container}>
                <h1 className={styles.title}>{props.weather.city}</h1>
                <div className={styles.card}>
                    <Humidity
                        icon={props.weather.icon}
                        humidity={props.humidity}
                    />
                    <Forecast
                        pressure={props.pressure}
                        temp={props.temp[0]}
                        wind={props.wind}
                        temperatureImageRender={props.temperatureImageRender}
                    />
                </div>
                <div className={styles.map}></div>
            </div>
        )
    }
}

DayPage.prototype = {
    weather: PropTypes.object,
    city: PropTypes.string
}

export default DayPage;