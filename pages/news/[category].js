

import React from 'react'

export const getServerSideProps = async (context) => {
    const { category } = context.params
    const res = await fetch(`http://localhost:5000/news?category=${category}`)
    const news = await res.json()

    return {
        props: {
            news,
            category
        }
    }

}

const NewsSortWithCategory = ({ news, category }) => {
    return (
        <div>
            <h1>News Category:{category}</h1>
            {
                news.map((item) => {
                    return <div key={item.id}>
                        <h2>{item.id} {item.title}  | {item.category}</h2>
                    </div>
                })
            }
        </div>
    )
}

export default NewsSortWithCategory
