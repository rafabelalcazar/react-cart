import React from 'react'
import { products } from '../products'
import { useContext } from 'react'
// eslint-disable-next-line
import { CartContext } from '../context/CartContext';
import { useEffect } from 'react'
import { fetchProducts } from '../data/getProducts'

const ProductList = () => {
    const { cart, addToCart, removeFromCart, clearCart, updateCart } = useContext(CartContext)

    // useEffect(() => {
    //     fetchProducts().then((data) => {
    //         // console.log(data)
    //         updateCart(cart)
    //     }
    //     )
    // },[])

    console.log(cart)
    return (
        <div>
            {
                products.map((product) => {
                    return (
                        <div style={{ border: '1px solid' }} key={product.id}>
                            <h2>{product.name}</h2>
                            {/* <img src={product.image} alt={product.title} /> */}
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <button onClick={(e)=>addToCart(product)}  >Agregar al carrito</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList