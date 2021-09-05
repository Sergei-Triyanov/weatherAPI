import React, {useEffect, useState} from "react";
import  styles from  './temp.module.css'
const TemperatureSwitcher = props => {

    const activeTempAdd = e => {
        const bgArr =  document.querySelectorAll(`.${styles.bg}`)
        for (let i = 0; i < bgArr.length; i++){
            bgArr[i].classList.remove(`${styles.add}`)
            if(e.target === bgArr[i]){
                e.target.classList.toggle(`${styles.add}`)
            }
        }
    }

    return(
        <>
            <div className={styles.title}>TEMPERATUR</div>
            <div className={styles.switcher}>
                <button className={styles.item} onClick={ e => {
                    activeTempAdd(e)
                    props.handleFormatTemp('C')
                }}>
                    <div className={styles.bg}> </div>
                    <span className={styles.text__temp}>c</span>
                </button>
                <button className={styles.item} onClick={ e => {
                    activeTempAdd(e)
                    props.handleFormatTemp('F')
                }}>
                    <div className={`${styles.bg} ${styles.add}`}> </div>
                    <span className={styles.text__temp}>f</span>
                </button>
                <button className={styles.item} onClick={ e => {
                    activeTempAdd(e)
                    props.handleFormatTemp('K')
                }}>
                    <div className={styles.bg}> </div>
                    <span className={styles.text__temp}>k</span>
                </button>
            </div>
        </>
    )
}

export default TemperatureSwitcher