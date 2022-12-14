import React from 'react';
import './Product.css';

function Product() {
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p className='product__info'>Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)</p>
                    <p className="product__price">$40</p>
                    <div className="product__rating">⭐ ⭐ ⭐</div>
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="product-image" />
                <button>Add to Basket</button>
            </div>

        </div>
    )
}

export default Product