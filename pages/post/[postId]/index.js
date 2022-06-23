import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
    const res = await fetch('https://dummyjson.com/posts')
    const { posts } = await res.json()
    const paths = posts.map(post => ({ params: { postId: post.id.toString() } }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const { postId } = context.params
    const res = await fetch(`https://dummyjson.com/posts/${postId}`)
    const post = await res.json()
    return {
        props: {
            post
        }
    }
}



const Post = ({ post }) => {
    const router = useRouter()
    const { asPath } = router
    return (
        <div>
            <Link href={`${asPath}/comment`}>
                <a>
                    <h2>{post.title}</h2>
                    <h3>{post.body}</h3>
                </a>
            </Link>

        </div>
    )
}

export default Post
