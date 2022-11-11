import { useState } from "react"

export default function DoubleCount() {
    const [count, setCount] = useState(0)

    function increaseWithPrev() {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    function increasePlusOne() {
        setCount(count + 1)
        setCount(count + 1)
    }
    return (
        <div>
            <p>Update state twice, the same way, in two consecutive lines of code.</p>
            <p>So, maybe expect a state of 1 to become 3 when the button is clicked????????</p>
            <p>But, changes in state do not happen immediately (synchronously)</p>
            <button className="m-5 btn btn-outline">{count}</button>
            <button onClick={increaseWithPrev} className="m-5 btn btn-success">Increase With Prev</button>
            <button onClick={increasePlusOne} className="m-5 btn btn-warning">Increase PLus One</button>
        </div>
    )
}
