import React from "react";

const CardWeather = props =>{
    return(
        <>
            <p>{props.text}</p>
            <img
                src={`http://openweathermap.org/img/w/${props.icon}.png`}
                width={'60px'}
                height={'60px'}
            />
        </>
    )
}