import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <h2>Cart</h2>
            {
                cart.map((product, idx) => {
                    return (
                        <div style={{ border: '1px solid', background: '#909090'}} key={idx}>
                            <h2>{product.name}</h2>
                            {/* <img src={product.image} alt={product.title} /> */}
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <p>Cantidad: {product.quantity}</p>
                            <button onClick={() => removeFromCart(product)} >Eliminar del carrito</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart



