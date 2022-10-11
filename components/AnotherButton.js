import { useState } from "react"

const description = "WIDTH GOES HERE: "


export default function AnotherButton() {

    const {widthParam, setWidth} = useState(55)

    function handleClick() {
        console.log("before setWidth", window.innerWidth, window.innerHeight)
        setWidth(window.innerWidth)
        console.log("after setWidth", window.innerWidth, window.innerHeight)
    }
    
    return (
        <button onClick={handleClick}>{description}{widthParam}</button>
    )
}
