
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
    const res = await fetch(`https://dummyjson.com/posts/${postId}/comments`)
    const { comments } = await res.json()
    return {
        props: {
            comments
        }
    }
}

const Comments = ({ comments }) => {
    const router = useRouter()
    console.log(router)
    const { asPath } = router

    return (
        <div>
            {
                comments.map(comment =>
                    <div key={comment.id}>
                        <Link href={`${asPath}/${comment.id}`}>
                            <a>

                                <h3>{comment.user.username}</h3>
                                <h4>{comment.body}</h4>
                                <hr />

                            </a>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Comments
