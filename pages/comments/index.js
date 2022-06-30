


import React, { useState } from 'react'

const Comments = () => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")
    const fetchComments = async () => {
        const response = await fetch(`http://localhost:3000/api/comments`)
        const data = await response.json()
        setComments(data)
    }
    const addComment = async () => {

        const response = await fetch(`http://localhost:3000/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        setComments(data)
    }
    const deleteComment = async (id) => {
        const response = await fetch(`http://localhost:3000/api/comments/${id}`, {
            method: 'DELETE',
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }
    return (
        <div>
            <button onClick={fetchComments}>Load Comments</button>
            {
                comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            <h2>{comment.id}  </h2>
                            <p>{comment.text}</p>
                            <button onClick={() => deleteComment(comment.id)}>delete</button>
                            <hr />
                        </div>
                    )
                })
            }
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
}

export default Comments
