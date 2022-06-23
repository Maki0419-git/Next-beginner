import React from 'react'
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://dummyjson.com/posts')
    const { posts } = await res.json()
    return {
        props: {
            posts
        }
    }
}



const Posts = ({ posts }) => {
    return (
        <div>
            {
                posts.map((post) =>
                    <div key={post.id}>
                        <Link href={`/post/${post.id}`}>
                            <a>

                                <h3>{post.title}</h3>
                                <h4>{post.body}</h4>
                                <hr />

                            </a>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Posts
