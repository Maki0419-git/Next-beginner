import React, { useEffect, useState } from 'react'


const CSR = () => {
    const [products, serProducts] = useState([])
    useEffect(() => {

        const getData = async () => {
            const res = await fetch('https://dummyjson.com/products')
            const { products } = await res.json()
            serProducts(products)
        }
        getData()
    }, [])
    return (
        <div>
            {
                products.map(item => <h5 key={item.id}>{item.title}</h5>)
            }
        </div>
    )
}

export default CSR
