

import React from 'react'

export const getServerSideProps = async (context) => {

    const { req, res, query, params: { category } } = context
    // req: The HTTP IncomingMessage object, with an additional cookies prop, which is an object with string keys mapping to string values of cookies.
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie', ['name=Yoshino'])
    // query: An object representing the query string.
    console.log(query)
    //  params: If this page uses a dynamic route, params contains the route parameters. If the page name is [id].js , then params will look like { id: ... }
    console.log(category)


    const response = await fetch(`http://localhost:5000/news?category=${category}`)
    const news = await response.json()

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
