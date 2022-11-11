import { useEffect, useState } from "react"

export default function ResourceType() {
    const [resourceType, setResourceType] = useState("posts")

    useEffect(() => {
        console.log("useEffect runs every time this component instance is rendered")
    }, [resourceType])
    return (
        <>
            <div className="my-6 text-5xl">ResourceType</div>

            <div className="flex justify-around">
                <button className="btn btn-primary" onClick={() => setResourceType("Posts")}>Posts</button>
                <button className="btn btn-primary" onClick={() => setResourceType("Users")}>Users</button>
                <button className="btn btn-primary" onClick={() => setResourceType("Comments")}>Comments</button>
            </div>

            <h1 className="my-5 text-5xl text-white bg-blue-700">{resourceType}</h1>
        </>
    )
}
