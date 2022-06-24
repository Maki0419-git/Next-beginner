import React from 'react'
import { useRouter } from 'next/router'
export const getStaticPaths = async () => {
    // const res = await fetch('http://localhost:5000/products');
    // const products = await res.json();
    // const paths = products.map(product => ({ params: { id: product.id.toString() } }))
    const paths = [{ params: { id: "1" } }]

    return {
        paths,
        fallback: true
    }
}


export const getStaticProps = async (context) => {
    const { id } = context.params
    console.log(`regenarate ${id}`)
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const product = await res.json();

    if (!product.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            product
        },
        revalidate: 10
    }

}


const Product = ({ product }) => {
    const router = useRouter()
    if (router.isFallback) return <h1>Loading...</h1>
    return (
        <div key={product.id}>
            <h2>{product.id} {product.title} {product.price}</h2>
        </div>
    )
}

export default Product
