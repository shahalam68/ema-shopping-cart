import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProduct] = useState([]);

    // cart state
    const [cart, setCart] = useState([]);
    // jekhane state sekhane sekhane event handelar 

    const handleAddProduct = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    useEffect(() =>{
        fetch('products.JSON')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);
    return (
        <div>
            <div className="row m-3">
                <div className="col-md-9">
                    <div className="row ">

                        {
                            products.map(product => <Product
                                key ={product.key}
                                product={product}
                                handleAddProduct={handleAddProduct}
                            ></Product>)
                        }
                    </div>
                    {/* Ekhane Product Load korbo */}

                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;