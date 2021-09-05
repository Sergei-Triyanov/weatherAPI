import React from "react";
import PropTypes from "prop-types";
import styles from "./days.module.css";
import {NavLink} from "react-router-dom";

const Days = props => {

    const day = (next = 0) => {
        let date = new Date();
        let day = date.getDay() + next;

        const daysArr = {
            0 : 'Sun.',
            1 : 'Mon.',
            2 : 'Tue.',
            3 : 'Wen.',
            4 : 'Thu.',
            5 : 'Fri.',
            6 : 'Sat.',
        }

        return day !== 7 ? daysArr[day] : daysArr[0]
    }

    return(
        <div className={styles.days}>
            <h3 className={styles.title}>SEARCH DAY</h3>
            <ul className={styles.days__item}>
                <li className={styles.days__inner}>
                    {/*Today*/}
                    <NavLink
                        to='/today'
                        className={styles.days__text}
                        activeClassName={styles.days__text__active}
                    >
                        {day()}
                    </NavLink>
                </li>
                <li className={styles.days__inner}>
                    {/*Tomorrow*/}
                    <NavLink
                        to='/tomorrow'
                        className={styles.days__text}
                        activeClassName={styles.days__text__active}
                    >
                        {day(1)}
                    </NavLink>
                </li>
                {/*Week*/}
                <li className={styles.days__inner}>
                    <NavLink
                        to='/week'
                        className={styles.days__text}
                        activeClassName={styles.days__text__active}
                    >
                        week
                    </NavLink>

                </li>
            </ul>
        </div>
    )
}

Days.prototype = {
    handleTypeUrl: PropTypes.func,
}

export  default  Days;