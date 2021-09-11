import React from "react";
import Humidity from "./Humidity";
import Forecast from "./Forecast";

const TodayPage = props =>{
    return (
        <>
            <Humidity
                icon={props.icon}
                humidity={props.humidity}
            />
            <Forecast
                pressure={props.pressure}
                temp={props.temp}
                wind={props.wind}
                temperatureImageRender={props.temperatureImageRender}
                day={props.day}
            />
        </>
    )
}

export default TodayPage;