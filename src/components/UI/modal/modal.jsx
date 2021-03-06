import React from 'react';
import classes from './Modal.module.css'
import Backdrop from '../backdrop/backdrop';

const modal = (props) => (
    <div>
        <Backdrop show={props.show} clicked={props.modalclosed}/>
    <div 
    className={classes.Modal}
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }}
    >
        {props.children}
    </div>
    </div>
);
    



export default modal;