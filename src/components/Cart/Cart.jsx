import React from 'react';

const Cart = (props) => {
    const {cart} = props || {};
    return (
        <div>
            <h3><i className="fas fa-shopping-cart"></i>
             {cart.length}
            </h3>
            <ul>
                {
                    cart.map(pd => <li>{pd.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;