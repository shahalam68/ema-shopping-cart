import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.product);

    const {name, categoty,img,price,stock} = props.product || {};

    return (
       <div className='col-md-6 mb-4 '>
                    <div className="card  h-100" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                    <div className="col-md-5">
                        <img src={img} className="img-fluid rounded-start" alt="..."/>
                    </div>
            <div className="col-md-7">
            <div className="card-body">
                <h5 className="card-title text-primary "><small>{name}</small></h5>
                <p className="card-text"><small>${price}</small></p>
                <p className="card-text"><small>{stock} left</small></p>
                <button 
                onClick={() =>props.handleAddProduct(props.product)}
                 className='btn btn-warning'><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                </div>
            </div>
        </div>
        </div>
       </div>
    );
};

export default Product;