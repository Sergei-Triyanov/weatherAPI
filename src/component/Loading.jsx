import React from "react";
import {CircularProgress} from "@material-ui/core";
import styles from './loading.module.css'

const Loading = () => {
    return(
        <div className={styles.loading}>
            <CircularProgress className={styles.progress}/>
        </div>
    )
}

export default Loading