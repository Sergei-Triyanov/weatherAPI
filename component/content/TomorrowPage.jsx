import React from "react";
import Loading from "../Loading";
import PropTypes from "prop-types";
import Humidity from "./Humidity";
import Forecast from "./Forecast";
import temperatureCovert from '../function/convectTemperature'

const TomorrowPage = ({getListWeatherTomorrow , formatTemp,temperatureImageRender, day }) => {
    const forecast = getListWeatherTomorrow()
    if(forecast[0]){
        const weather = {
            'temp' : temperatureCovert(Math.floor(forecast[0].main.temp)),
            'icon' : forecast[0].weather[0].icon,
            'wind' : forecast[0].wind.speed,
            'humidity' : forecast[0].main.humidity,
            'pressure' : forecast[0].main.pressure,
        }

        const temperatureFilter = temp => temp.filter(el=> el.format === formatTemp)

        const temperature = temperatureFilter(weather.temp)[0];

        console.log(temperature[0], weather.icon, weather.wind)

        return (
            <>
                <Humidity
                    icon={weather.icon}
                    humidity={weather.humidity}
                />
                <Forecast
                    pressure={weather.pressure}
                    temp={temperature}
                    wind={weather.wind}
                    temperatureImageRender={temperatureImageRender}
                    day={day}
                />
            </>
        )
    }
    return <Loading/>
}

TomorrowPage.prototype = {
    getListWeatherTomorrow: PropTypes.array
}

export default  TomorrowPage;