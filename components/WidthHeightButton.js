import { useState } from "react"



export default function WidthHeightButton() {


    const [widthParam, setWidth] = useState(55)
    const [heightParam, setHeight] = useState(55)
    const [tailwindBreakpoint, setTailwindBreakpoint] = useState("empty")

    console.log("[AnotherButton] check array used to destructure setWidth is a function:", typeof setWidth)

    function handleClick() {
        console.log("[AnotherButton] width x height:", window.innerWidth, "x", window.innerHeight)

        let breakpoint = ""
        const currentWidth = window.innerWidth

        if (currentWidth >= 1536) {
            breakpoint = "2xl"
        } else if (currentWidth >= 1280) {
            breakpoint = "xl"
        } else if (currentWidth >= 1024) {
            breakpoint ="lg"
        } else if (currentWidth >= 768) {
            breakpoint = "md"
        } else if (currentWidth >= 640) {
            breakpoint = "sm"
        } else {
            breakpoint = "default"
        }
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        setTailwindBreakpoint(breakpoint)
    
        console.log("typeof widthParam:", typeof widthParam, widthParam)

        



    }
    
    return (
        <button onClick={handleClick} className="my-6 btn btn-secondary">
            width x height: {widthParam} x {heightParam} {tailwindBreakpoint}
        </button>
    )
}
