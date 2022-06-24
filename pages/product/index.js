

import React from 'react'

export const getStaticProps = async () => {
    console.log('generate/regenerate products page')
    const res = await fetch('http://localhost:5000/products');
    const products = await res.json();
    return {
        props: {
            products
        },
        revalidate: 10
    }
}


const Products = ({ products }) => {
    return (
        <div>
            {
                [products.map((product) =>
                    <div key={product.id}>
                        <h2>{product.id} {product.title} {product.price}</h2>
                    </div>)]
            }
        </div>
    )
}

export default Products
