import { comments } from "../../../data/comments"

export default function handler(req, res) {
    const { commentId } = req.query
    if (req.method === "DELETE") {
        const deletedId = comments.findIndex(comment => comment.id === parseInt(commentId))
        const deletedComment = comments.splice(deletedId, 1)
        res.status(200).json(deletedComment)
    }

}