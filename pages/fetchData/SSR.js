import React from 'react'

export const getServerSideProps = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=1')
    const { products } = await res.json()
    return {
        props: {
            products
        }
    }
}

const SSR = ({ products }) => {
    return (
        <div>
            {
                products.map(item => <h5 key={item.id}>{item.title}</h5>)
            }
        </div>
    )
}

export default SSR
