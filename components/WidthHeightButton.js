import { useState } from "react"



export default function AnotherButton() {


    const [widthParam, setWidth] = useState(55)
    const [heightParam, setHeight] = useState(55)
    const [tailwindBreakpoint, setTailwindBreakpoint] = useState("empty")

    console.log("[AnotherButton] check array used to destructure setWidth is a function:", typeof setWidth)

    function handleClick() {
        console.log("[AnotherButton] width x height:", window.innerWidth, "x", window.innerHeight)

        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    
        console.log("typeof widthParam:", typeof widthParam, widthParam)

        let breakpoint = ""

        if (widthParam >= 1536) {
            breakpoint = "2xl"
        } else if (widthParam >= 1280) {
            breakpoint = "xl"
        } else if (widthParam >= 1024) {
            breakpoint ="lg"
        } else if (widthParam >= 768) {
            breakpoint = "md"
        } else if (widthParam >= 640) {
            breakpoint = "sm"
        } else {
            breakpoint = "default"
        }

        setTailwindBreakpoint(breakpoint)

    }
    
    return (
        <button onClick={handleClick} className="my-6 btn btn-secondary">
            width x height: {widthParam} x {heightParam} {tailwindBreakpoint}
        </button>
    )
}
