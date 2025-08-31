import { useMemo, useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartModal = ({ showCart, setShowCart }) => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const handleShipOrder = () => {
        alert("🛫 Your items have been shipped!");
        clearCart();
        setShowCart(false);
    };

    const totalCartPrice = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    }, [cartItems]);

    if (!showCart) return null;

    return (
        <div className="cart-overlay" onClick={() => setShowCart(false)}>
            <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
                <h3>🛒 Your Cart</h3>
                {cartItems.length === 0 ? (
                    <p>No items in cart.</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <img src={item.img} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px', marginRight: '10px' }} />
                                <span>{item.title} ({item.quantity}) - ${item.totalPrice.toFixed()}</span>
                                <button onClick={() => removeFromCart(item.id)}>❌</button>
                            </li>
                        ))}
                    </ul>
                )}
                {cartItems.length > 0 && (
                    <>
                        <div className="cart-total">
                            <strong>Total: ${totalCartPrice.toFixed(2)}</strong>
                        </div>
                        <button className="confirm-btn" onClick={handleShipOrder}>
                            Confirm Order
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartModal;