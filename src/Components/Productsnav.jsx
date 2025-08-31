import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import CartModal from '../Components/CartModal';

const Productsnav = (props) => {
    const { cartItems } = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

    return (
        <div>
            <nav className="navbar products-nav">
                <div className="links">
                    <div className='linkscomponents'>
                        <Link to='/' onClick={() => props.filteredBysubCategory('ALL')}>{props.ALL}</Link>
                        <Link to='/' onClick={() => props.filteredBysubCategory('Kitchen')}>{props.Kitchen}</Link>
                        <Link to='/' onClick={() => props.filteredBysubCategory('Smartphones')}>{props.Smartphones}</Link>
                        <Link to='/' onClick={() => props.filteredBysubCategory('Shirts')}>{props.Shirts}</Link>
                        <Link to='/' onClick={() => props.filteredBysubCategory('Pants')}>{props.Pants}</Link>

                        <button className='createlink' onClick={() => setShowCart(!showCart)}>
                            {props.Cart} ({cartItems.length})
                        </button>
                    </div>
                </div>
            </nav>

            <CartModal showCart={showCart} setShowCart={setShowCart} />
        </div>
    );
};

export default Productsnav;