import React, {useState, useEffect, useCallback,} from "react";
//component
import Header from "./component/header/Header";
//styles
import  './App.css'
import temperatureCovert from './component/function/convectTemperature'
import Active from "./component/Active";
import Loading from "./component/Loading";



function App() {
    //state
    const [city, setCity] = useState('Moscow');
    const [weatherDate, setWeatherDate] = useState({
        'weather' : {
            'city' : city,
            'list' : [],
            'time' : undefined,
            'temp' : [{'format' : '', 'value' : ''}],
            'feels_like' : undefined,
            'clouds' : undefined,
            'wind' : undefined,
            'icon' : undefined,
        },
        'local' : {
            'lat' : 55.7522,
            'lon' : 37.6156
        },
        'error' : ''
    });
    const [formatTemp, setFormatTemp] = useState('F')

    //handle state city
    const handleCity = prop => setCity(prop);

    //server request OpenWeatherMap -> change state weatherDate or errors
    useEffect(()=>{

        const fetchDate = async () =>{
            const kye = 'b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial';
            const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${kye}`;

            //response server
            await fetch( URL )
                .then( res => res.json())
                .then( result => {
                    if( +result.cod === 200 ){
                        setWeatherDate({
                            'weather': {
                                'city' : result.city.name,
                                'list' : result.list,
                                'dt_txt' : result.list[0].dt_txt,
                                'feels_like' : Math.floor(result.list[0].main.feels_like),
                                'icon' : result.list[0].weather[0].icon,
                                'clouds' : result.list[0].clouds.all,
                                'wind' : result.list[0].wind.speed,
                                'humidity': result.list[0].main.humidity,
                                'temp' : temperatureCovert(+result.list[0].main.temp),
                                'pressure' : result.list[0].main.pressure
                            },
                            'local' : {
                                'lat' : result.city.coord.lat,
                                'lon' : result.city.coord.lon,
                            },
                            'error': '',
                        })
                    } else{
                        setWeatherDate({
                            'weather' : {
                                "city" : city,
                                'list' : undefined,
                                'time' : undefined,
                                'temp' : undefined,
                                'feels_like' : undefined,
                                'clouds' : undefined,
                                'wind': undefined,
                            },
                            'local' : {
                                'lat' : 55.7522,
                                'lon' : 37.6156
                            },
                            'error' : result.message
                        })
                    }
                })
        }
        fetchDate()
    }, [ city ])

    //handle state format temperature
    const handleFormatTemp = format => {
        setFormatTemp(format)
    }

    //filters by temperature format
    const filterFormatTemperature = useCallback((format)=>{
        return weatherDate.weather.temp.filter(el => el.format === format)
    },[weatherDate,formatTemp])

    const loadingContentChecked = () => {

        if (weatherDate.weather.temp) {
            return <Active
                weather={weatherDate.weather}
                error={weatherDate.error}
                city={city}
                temp={filterFormatTemperature(formatTemp)}
                wind={weatherDate.weather.wind}
                humidity = {weatherDate.weather.humidity}
                pressure = {weatherDate.weather.pressure}
                getListWeatherTomorrow={getListWeatherTomorrow}
                formatTemp={formatTemp}
            />
        }

        return <Loading/>
    }

    //return array length 8 element weather tomorrow
    const getListWeatherTomorrow = () => {

        //search unique value day
        const filterListUniqueDay = [
            ...new Set(
            weatherDate
            .weather
            .list
            .map(item => item.dt_txt.split(' ')[0])
        )];

        const filterListForDay = weatherDate
            .weather
            .list
            .filter(e => e.dt_txt.split(' ')[0] === filterListUniqueDay[1])

        return filterListForDay
    }


    return (
        <div className={'app'}>
            <Header
                classes={'header'}
                handleCity={handleCity}
                handleFormatTemp={handleFormatTemp}
            />
            {loadingContentChecked()}
        </div>
    );
}

export default App;
