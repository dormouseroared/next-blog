import { useState } from "react"

const description = "WIDTH GOES HERE: "


export default function AnotherButton() {

    const [widthParam, setWidth] = useState(55)
    console.log("[AnotherButton] check array used to destructure setWidth function:", typeof setWidth)

    function handleClick() {
        console.log("[AnotherButton] width x height:", window.innerWidth, "x", window.innerHeight)
        setWidth(window.innerWidth)
    }
    
    return (
        <button onClick={handleClick}>{description}{widthParam}</button>
    )
}
