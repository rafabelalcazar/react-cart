import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const { cart } = useContext(CartContext)
    console.log(cart)
    return (
        <div>{
            cart.map((product) => {
                return (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                        <p>{product.quantity}</p>
                    </div>
                )
            })

        }</div>
    )
}

export default Cart