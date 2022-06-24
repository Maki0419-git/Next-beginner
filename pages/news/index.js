import React from 'react'


export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:5000/news')
    const news = await res.json()
    console.log("generate at server")
    return {
        props: {
            news
        }
    }
}

const News = ({ news }) => {
    return (
        <div>
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

export default News
