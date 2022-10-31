import { createContext, useEffect, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove, quantity) => {
    if (quantity === 'all' || productToRemove.quantity == 1) {
        return cartItems.filter((item) => item.id !== productToRemove.id);
    }
    return cartItems.map((item) => {
        return item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item;
    });
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    removeItemFromCart: () => {},
    addItemToCart: () => {},
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((preValue, { quantity, price }) => {
            return preValue + quantity * price;
        }, 0);
        setCartTotal(total);
    }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    };

    const removeItemFromCart = (product, quantity) => {
        setCartItems(removeCartItem(cartItems, product, quantity));
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
