import React from 'react';
import classes from './order.module.css'

const ordersummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey => {
    return <li key={igkey}><span>{igkey}:</span> {props.ingredients[igkey]}</li>})

    return (
        <div className={classes.ordersummary}>
            <h2>Order Summary</h2>
            <p>Your delicious burger includes:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to checkout?</p>
            <button className={classes.Danger} onClick={props.clicked}>CANCEL</button>
            <button className={classes.Success} onClick={props.continued}>CONTINUE</button>
        </div>
    )


}
export default ordersummary;
    
