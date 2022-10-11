import { useState } from "react"



export default function AnotherButton() {

    const [widthParam, setWidth] = useState(55)
    const [heightParam, setHeight] = useState(55)

    console.log("[AnotherButton] check array used to destructure setWidth function:", typeof setWidth)

    function handleClick() {
        console.log("[AnotherButton] width x height:", window.innerWidth, "x", window.innerHeight)
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    
    return (
        <button onClick={handleClick} className="my-6 btn btn-secondary">
            width x height: {widthParam} x {heightParam}
        </button>
    )
}
