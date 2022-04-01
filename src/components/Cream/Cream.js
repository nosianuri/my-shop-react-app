import React from 'react';
import './Cream.css';

const Cream = ({handleAddToCart, cream}) => {
    
    const {name, image, price} = cream;
    return (
        <div className='c-ream'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(cream)}>Add to Cart</button>
        </div>
    );
};

export default Cream;