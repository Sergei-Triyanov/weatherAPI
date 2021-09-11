import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from './search.module.css';
import {Button, InputBase} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const SearchComponent = props => {

  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = e => {
      return setSearchValue(e.target.value)
  }

  return(
      <div className={styles.position}>
          <InputBase value={searchValue}
                   className={styles.search}
                   placeholder={'search city'}
                   color="secondary"
                   onChange={ e => handleInputChange(e)}
                   onKeyDownCapture={(e) => {
                       if(e.key === 'Enter'){
                           props.handleCity(searchValue)
                           setSearchValue('')
                       }
                   }}
          />
          <Button className={styles.search__btn} onClick={()=>{
              props.handleCity(searchValue)
              setSearchValue('')
          }}>
              <Search className={styles.icon}/>
          </Button>
      </div>
  )
}

Search.prototype = {
    handleCity: PropTypes.func.isRequired,
}

export  default  SearchComponent