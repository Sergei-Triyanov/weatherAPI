import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from './search.module.css';
import { InputBase } from "@material-ui/core";

const Search = props => {

  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = e =>{
      return setSearchValue(e.target.value)
  }

  return(
      <>
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
      </>
  )
}

Search.prototype = {
    handleCity: PropTypes.func.isRequired,
}

export  default  Search