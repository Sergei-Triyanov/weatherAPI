import React, {useState, useEffect,} from "react";
import {Route, Switch} from "react-router-dom";
//component
import Header from "./component/header/Header";
import TodayPage from "./component/content/TodayPage";
//styles
import  './App.css'
import {array} from "prop-types";



function App() {
    //state
    const [city, setCity] = useState('Moscow');
    const [weatherDate, setWeatherDate] = useState({
        'weather' : {
            "city" : city,
            'list' : null,
            'time' : null,
            'temp' : null,
            'feels_like' : null,
            'clouds' : null,
            'wind': null,
        },
        'local' : {
            'lat' : 55.7522,
            'lon' : 37.6156
        }});
    const [errors, setErrors] = useState('');
    const [temperature, setTemperature]  = useState({
        'temp' : 'Loading...'
    });
    const [formatTemp, setFormatTemp] = useState('F')


    //handle state city
    const handleCity = prop => setCity(prop);

    //server request OpenWeatherMap -> change state weatherDate or errors
    useEffect(()=>{

        const fetchDate = async () =>{
            const kye = 'b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial';
            const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${kye}`;

            //convert temperature and return an array of objects of these
            // values [{'format' : 'F', 'value' : number}]
            const temperatureCovert= (result) => {
                const temp = result.list[0].main.temp;
                return [
                    {'format' : 'F', 'value' : Math.floor(temp)},
                    {'format' : 'C', 'value' : Math.floor((temp -32) * (5/9)) },
                    {'format' : 'K', 'value' : Math.floor(((temp -32) * (5/9) + 273)) }
                ]
            }

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
                                'temp' : temperatureCovert(result),
                            },
                            'local' : {
                                'lat' : result.city.coord.lat,
                                'lon' : result.city.coord.lon,
                            }
                        })
                        setTemperature({
                            'temp' :  Math.floor(result.list[0].main.temp)
                        })
                        setErrors('')
                    } else{
                        setErrors( result.message )
                        setWeatherDate({
                            'weather' : {
                                "city" : city,
                                'list' : null,
                                'time' : null,
                                'temp' : null,
                                'feels_like' : null,
                                'clouds' : null,
                                'wind': null,
                            },
                            'local' : {
                                'lat' : 55.7522,
                                'lon' : 37.6156
                            }})
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
    const filterFormatTemperature = (format) =>{
        return weatherDate.weather.temp.filter(el => el.format === format)
    }

    //check valid temp -> valid temp = Array
    useEffect(()=>{

        if(Array.isArray(weatherDate.weather.temp)){
            return setTemperature({'temp' : filterFormatTemperature(formatTemp)})
        }
    },[formatTemp,weatherDate])

    return (
        <div className={'app'}>
            <Header
                classes={'header'}
                handleCity={handleCity}
                handleFormatTemp={handleFormatTemp}
            />
            <Switch>
                {/*Today*/}
                <Route path={'/today'} render={() => {
                   return <TodayPage
                       weather={weatherDate.weather}
                       error={errors}
                       city={city}
                       temp={temperature.temp}
                   />
                }}/>
                {/*/Today*/}
            </Switch>
        </div>
    );
}

export default App;
