import React from 'react';
import classes from './toolbar.module.css'
import Navigationitems from '../navigation/navigationitems/navigationitems';
import Hamburgericon from './hamburgericon'

const toolbar = (props) => {
    return (
        <header className={classes.toolbar}>
            <Hamburgericon clicked={props.iconclicked}/>
            <span>MY BURGER MAKER</span>
            <nav>
                <Navigationitems/>
            </nav>
        </header>

    )
}

export default toolbar;