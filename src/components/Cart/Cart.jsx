import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const {cart} = props || {};

    const totalReducer = (previusValue,currentValue) => previusValue + currentValue.price;
    const total = cart.reduce(totalReducer , 0)
    return (
        <div>
            <h3><FontAwesomeIcon icon={faShoppingCart} />
             {cart.length}
            </h3>
            <ul>
                {
                    cart.map(pd => <li>{pd.name}</li>)
                }
            </ul>
            <h2>Price:{total}</h2>
        </div>
    );
};

export default Cart;