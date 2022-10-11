import { useState } from "react"

const description = "WIDTH GOES HERE: "


export default function AnotherButton() {

    const {widthParam, setWidth} = useState(55)

    function handleClick() {
        console.log(window.innerWidth)
        setWidth(window.innerWidth)
    }
    
    return (
        <button onClick={handleClick}>{description}{widthParam}</button>
    )
}
