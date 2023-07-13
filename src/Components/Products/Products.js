import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    const handleAddToCart = product =>{
        setCart([...cart, product])
    }



    useEffect(()=>{
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart ={handleAddToCart} ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h1>Products</h1>
                <p>Product added: {cart.length}</p>
            </div>



        </div>
    );
};

export default Products;