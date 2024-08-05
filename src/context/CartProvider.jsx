import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const updateCart = (products) => {
        setCart(products)
    }

    const addToCart = (product) => {
        const { id, title, price } = product
        const item = cart.find(i => i.id === id)
        if (item) {
            item.quantity++
            setCart([...cart])
        } else {
            setCart([...cart, { id, title, price, quantity: 1 }])
        }
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateCart }}>
            {children}
        </CartContext.Provider>
    )
}