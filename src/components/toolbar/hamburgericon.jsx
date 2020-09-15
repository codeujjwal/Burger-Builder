import React from 'react';
import classes from './hamb.module.css'

const Hamburgericon = (props) => {
    return(
        <div onClick={props.clicked} className={classes.icon}>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>

        </div>
    )
}
export default Hamburgericon; 