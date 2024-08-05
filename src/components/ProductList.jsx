import React from 'react'
import { products } from '../products'
import { useContext } from 'react'
// eslint-disable-next-line
import { useEffect } from 'react'
import { fetchProducts } from '../data/getProducts'
import { CartContext } from '../context/CartContext'

const ProductList = () => {

    const { addToCart } = useContext(CartContext)

    return (
        <div>
            <h2>Produc List</h2>
            {
                products.map((product) => {
                    return (
                        <div style={{ border: '1px solid' }} key={product.id}>
                            <h2>{product.name}</h2>
                            {/* <img src={product.image} alt={product.title} /> */}
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <button onClick={()=>addToCart(product)}   >Agregar al carrito</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList