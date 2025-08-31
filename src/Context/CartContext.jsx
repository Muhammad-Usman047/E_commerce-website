import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (productToAdd) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === productToAdd.id);

            if (existingItemIndex > -1) {
                const updatedItems = [...prevItems];
                const existingItem = updatedItems[existingItemIndex];
                updatedItems[existingItemIndex] = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                    totalPrice: existingItem.price * (existingItem.quantity + 1),
                };
                return updatedItems;
            } else {
                return [...prevItems, { ...productToAdd, quantity: 1, totalPrice: productToAdd.price }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === id);

            if (existingItemIndex === -1) {
                return prevItems;
            }

            const updatedItems = [...prevItems];
            const existingItem = updatedItems[existingItemIndex];

            if (existingItem.quantity > 1) {
                updatedItems[existingItemIndex] = {
                    ...existingItem,
                    quantity: existingItem.quantity - 1,
                    totalPrice: existingItem.price * (existingItem.quantity - 1),
                };
            } else {
                updatedItems.splice(existingItemIndex, 1);
            }
            return updatedItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;