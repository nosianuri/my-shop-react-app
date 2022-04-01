import React, { useState } from 'react';
import useCream from '../hook/useCream';
import Cart from '../Cart/Cart';
import Cream from '../Cream/Cream';
import './Home.css';

const Home = () => {
    const [creams, setCreams] = useCream();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(cream => cream.id === selectedItem.id);
        if (!exists){
            const newCart = [...cart, selectedItem];
        setCart(newCart);
        }
        else{
            alert('item already added');
        }
    }

    const handleRemoveFromToCart = (selectedItem) => {
        const rest = cart.filter(cream => cream.id !== selectedItem.id);
        setCart(rest);
    }

    return (
        <div className='home-container'>
            <div className="cream-container">
                {
                    creams.map(cream => <Cream
                        key={cream.id}
                        cream={cream}
                        handleAddToCart={handleAddToCart}
                    ></Cream>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFromToCart={handleRemoveFromToCart}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;