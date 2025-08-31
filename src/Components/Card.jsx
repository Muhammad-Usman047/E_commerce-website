// Card.jsx
import React, { useContext, useState } from "react";
import '../App.css'; 
import { CartContext } from '../Context/CartContext';

const Card = (props) => {
    const { addToCart } = useContext(CartContext);
    const [imageError, setImageError] = useState(false);

    const optimizeImageUrl = (url) => {
        if (url.includes('pexels.com')) {
            return url + '?auto=compress&cs=tinysrgb&w=300&h=200';
        }
        if (url.includes('unsplash.com')) {
            return url + '&w=300&h=200&fit=crop';
        }
        if (url.includes('images.samsung.com')) {
            return url;
        }
        return url; 
    };

    const handleAddToCart = () => {
        addToCart({
            id: props.id || `${props.title}-${props.category}-${props.price}`,
            title: props.title,
            category: props.category,
            price: props.price,
            img: props.img
        });
    };

    return (
        <div className="cardContainer">
            <div className="card" style={{ overflow: "hidden" }}>
                <button className="cart-btn" onClick={handleAddToCart}>🛒</button>
                
                {!imageError ? (
                    <img 
                        className='image' src={optimizeImageUrl(props.img)} 
                        alt={props.title} 
                        height={150} 
                        width={220} 
                        loading="lazy" onError={() => setImageError(true)}
                        style={{ objectFit: "cover", marginTop: "10px", borderRadius: '5px' }} 
                    />
                ) : (
                    <div 
                        className="image-placeholder"
                        style={{ width: '220px', height: '150px', backgroundColor: '#f0f0f0', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', marginTop: '10px',
                            borderRadius: '5px',
                            color: '#666'
                        }}
                    >
                        📷 Image unavailable
                    </div>
                )}
                
                <h4>Name: {props.title}</h4>
                <h4>Category: {props.category}</h4>
                <h5>Price: ${props.price}</h5>
            </div>
        </div>
    );
};

export default Card;