import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);

    const {name, img, price, seller, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product-container'>
            <div className='product-container-without-btn'>
                <img src={img} alt="" />
                <div className='product-text'>
                    <h3>Name: {name}</h3>
                    <p>Price: ${price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings}stars </p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='add-to-cart-button'>Add to Cart</button>
        </div>
    );
};

export default Product;