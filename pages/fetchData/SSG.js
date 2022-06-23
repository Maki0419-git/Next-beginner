import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// getStaticProps only run on server side!
// even won't be included in the JS bundle that is sent to the browser
// can write server-side code directly
// is allowed only in a page and cannot be run from a regular component file
// should return an object and object should contain a props key which is an object
// during development, getStaticProps runs on every request, in production, only run on build-time
export const getStaticProps = async () => {
    console.log('fetch data')
    const res = await fetch('https://dummyjson.com/products?limit=1')
    const { products } = await res.json()
    return {
        props: {
            products
        },
    }
}

const SSG = ({ products }) => {
    const router = useRouter()
    const [count, setCount] = useState(0)
    // shallow routing
    const handleClick = () => {
        const counter = Math.floor(Math.random() * 100)
        setCount(counter)
        router.push(`${router.pathname}?counter=${counter}`, undefined, { shallow: true })
    }
    return (
        <div>
            {
                products.map(item => <h5 key={item.id}>{item.title}</h5>)
            }
            <h3>{count}</h3>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default SSG


