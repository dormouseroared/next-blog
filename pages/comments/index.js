import { useState } from "react"

export default function CommentsAPIPage() {

    const [comments, setComments] = useState([])

    async function fetchComments() {
        const response = await fetch("/api/comments")
        const data = await response.json()
        setComments(data)
    }
    return (
        <>
            <div className="p-6 m-6">
                <button onClick={fetchComments} className=" p-6 border rounded-lg shadow bg-slate-800 text-white">Load comments</button>

                <div className="border border-blue-400 shadow-lg">

                    {comments.map((comment) => {
                        return <p key={comment.id}>{comment.id} {comment.text}</p>
                    })}

                </div>
            </div>
        </>
    )
}
