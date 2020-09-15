import React from 'react';
import classes from './buildcontrol.module.css';

const buildcontrol = (props) => (
    <div className={classes.buildcontrol}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.less} disabled={props.disabled} onClick={props.removed}>Less</button>
        <button className={classes.more} onClick={props.added}>More</button>
    </div>

);

export default buildcontrol;