import React from "react";
import PropTypes from "prop-types";
import styles from "./days.module.css";
import {NavLink} from "react-router-dom";
import DayConvector from "../function/day";

const Days = () => {

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
                        {DayConvector('short')}
                    </NavLink>
                </li>
                <li className={styles.days__inner}>
                    {/*Tomorrow*/}
                    <NavLink
                        to='/tomorrow'
                        className={styles.days__text}
                        activeClassName={styles.days__text__active}
                    >
                        {DayConvector('short',1)}
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