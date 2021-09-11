import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.css'
import Days from "./Days";
import TemperatureSwitcher from "./TemperatureSwitcher";
import SearchComponent from "./SearchComponent";

const Header = props => {


    return(
        <header className={props.classes}>
            <nav className={styles.nav}>
                <ul className={styles.nav__item}>

                    {/*logoElement*/}
                    <li className={styles.nav__inner}>
                        <div className={styles.logo}>
                            <h1 className={styles.logo__title}>Weather
                                <span className={styles.logo__subtitle}>Good</span>
                            </h1>
                        </div>
                    </li>
                    {/*/logo*/}

                    {/*search*/}
                    <li className={styles.nav__inner}>
                        <SearchComponent
                            handleWeatherDate={props.handleWeatherDate}
                            handleCity={props.handleCity}
                        />
                    </li>
                    {/*/search*/}

                    {/*days*/}
                    <li className={styles.nav__inner}>
                        <Days handleTypeUrl={props.handleTypeUrl}/>
                    </li>
                    {/*/days*/}

                    {/*temperature*/}
                    <li>
                        <TemperatureSwitcher
                            handleFormatTemp={props.handleFormatTemp}
                        />
                    </li>
                    {/*/temperature*/}

                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    handleCity: PropTypes.func.isRequired,
    handleTypeUrl:PropTypes.func,
}

export default Header;

