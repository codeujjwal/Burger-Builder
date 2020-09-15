import React from 'react';
import classes from './navigationitem.module.css'
import {NavLink} from 'react-router-dom'
 
const navigationitem = (props) => {
    return(
        <li className={classes.navitem}>
            <NavLink
                to={props.link}
                exact
                activeClassName={classes.active}
                >{props.children}
            </NavLink>
        </li>

    )
}

export default navigationitem;