import React from 'react';
import './Shop.css'

const Shop = () => {
    return (
        <div className='navigation'>
            <nav className='header-container'>
                <img src="../../logo.svg" alt="brand logo" />
                <div className='navigation-options'>
                    <a href="/order">Order</a>
                    <a href="/order-review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Shop;