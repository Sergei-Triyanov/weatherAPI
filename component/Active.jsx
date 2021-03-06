import React from "react";
import {Route, Switch} from "react-router-dom";
import DayPage from "./content/DayPage";

const Active = props =>{

    const temperatureImageRender = ( temp, format )=>{
        //svg hot
        const hotSvg = () => {
            return (
                <svg width="32" height="32" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.86197 0.813118C11.1542 0.813118 13.0125 2.65468 13.0125 4.92637V15.4373C15.2745 16.8185 16.7857 19.2963 16.7857 22.1272C16.7857 26.4641 13.2381 29.9798 8.86197 29.9798C4.48585 29.9798 0.938293 26.4641 0.938293 22.1272C0.938293 19.2963 2.44946 16.8185 4.71147 15.4373V4.92637C4.71147 2.65468 6.56972 0.813118 8.86197 0.813118ZM6.59806 16.5792C4.3856 17.4668 2.82488 19.6164 2.82488 22.1272C2.82488 25.4315 5.52778 28.1101 8.86197 28.1101C12.1962 28.1101 14.8991 25.4315 14.8991 22.1272C14.8991 19.6164 13.3383 17.4668 11.1259 16.5792V4.92637C11.1259 3.68727 10.1123 2.68278 8.86197 2.68278C7.61165 2.68278 6.59806 3.68727 6.59806 4.92637V16.5792Z" fill="#231815"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.86197 4.97978C9.55294 4.97978 10.1131 5.53992 10.1131 6.23089V17.2206C12.2715 17.7757 13.8664 19.7333 13.8664 22.0631C13.8664 24.8245 11.6258 27.0631 8.86197 27.0631C6.0981 27.0631 3.85754 24.8245 3.85754 22.0631C3.85754 19.7333 5.45242 17.7757 7.61087 17.2206V6.23089C7.61087 5.53992 8.171 4.97978 8.86197 4.97978Z" fill="#B6411F"/>
                </svg>
            )
        }

        //svg cold
        const coldSvg = () => {
            return (
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.5 8C26.2483 8 28.4762 10.2099 28.4762 12.9359V25.5491C31.1882 27.2064 33 30.1798 33 33.5769C33 38.7811 28.7467 43 23.5 43C18.2533 43 14 38.7811 14 33.5769C14 30.1798 15.8118 27.2064 18.5238 25.5491V12.9359C18.5238 10.2099 20.7517 8 23.5 8ZM20.7857 26.9193C18.1331 27.9844 16.2619 30.5639 16.2619 33.5769C16.2619 37.542 19.5025 40.7564 23.5 40.7564C27.4975 40.7564 30.7381 37.542 30.7381 33.5769C30.7381 30.5639 28.8669 27.9844 26.2143 26.9193V12.9359C26.2143 11.449 24.9991 10.2436 23.5 10.2436C22.0009 10.2436 20.7857 11.449 20.7857 12.9359V26.9193Z" fill="#231815"/>
                    <path d="M29.5 33.5C29.5 36.8137 26.8137 39.5 23.5 39.5C20.1863 39.5 17.5 36.8137 17.5 33.5C17.5 30.1863 20.1863 27.5 23.5 27.5C26.8137 27.5 29.5 30.1863 29.5 33.5Z" fill="#237AA3"/>
                    <path d="M25 24.5C25 23.6716 24.3284 23 23.5 23C22.6716 23 22 23.6716 22 24.5V31.5C22 32.3284 22.6716 33 23.5 33C24.3284 33 25 32.3284 25 31.5V24.5Z" fill="#237AA3"/>
                </svg>
            )
        }

        if((temp > 18 && format === 'C')||(temp > 65 && format === 'F')||(temp > 291 && format === 'K')){
            return hotSvg();
        }
        return coldSvg();
    }
    return(
        <>
            <Switch>
                {/*Today*/}
                <Route exact path={'/today'} render={() => {
                    return <DayPage
                        weather = {props.weather}
                        error = {props.error}
                        city = {props.city}
                        temp = {props.temp[0]}
                        wind = {props.wind}
                        humidity = {props.humidity}
                        pressure = {props.pressure}
                        temperatureImageRender={temperatureImageRender}
                        day={0}
                    />
                }}/>
                {/*/Today*/}

                {/*Tomorrow*/}
                <Route path={'/tomorrow'} render={() => {
                    return <DayPage
                        weather = {props.weather}
                        error = {props.error}
                        city = {props.city}
                        temp = {props.temp[0]}
                        wind = {props.wind}
                        humidity = {props.humidity}
                        pressure = {props.pressure}
                        temperatureImageRender={temperatureImageRender}
                        day={1}
                        getListWeatherTomorrow={props.getListWeatherTomorrow}
                        formatTemp={props.formatTemp}
                    />
                }}/>
                {/*/Tomorrow*/}
            </Switch>
        </>
    )
}

export default Active;