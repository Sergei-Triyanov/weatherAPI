import React from "react";
import Humidity from "./Humidity";

const CardWeather = props =>{
    return(
        <>
            <p>{props.text}</p>
            <Humidity icon={props.icon}/>
        </>
    )
}