import { useState } from "react"




export default function Counter() {

    const [count, setCount] = useState(() => 4)

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }
    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <>
            <h1 className="text-xl my-6">A simple counter component</h1>

           

            <button onClick={decrementCount} className="btn btn-warning px-6">-</button>
            <span className="px-6">{count}</span>
            <button onClick={incrementCount} className="btn btn-warning px-6">+</button>

            <p className="mt-6">Remember when using this hook:</p>

            <ul className="list-disc list-inside ml-6">
                <li>remember to use e.g. <span className="font-bold">prevCount</span> when carrying out arithmetic or other changes involving the previous value</li>
                <li> <a  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.youtube.com/watch?v=O6P86uwfdR0">Learn useState In 15 Minutes - React Hooks Explained</a></li>
                <li>the useState code is run every time there is a render, which could be expensive if it is complex code. To prevent this, useState(4) could be written as useState(() =&gt; 4)</li> and it would only run the first time to return 4. This can be confirmed with a console.log in that function.
                <li>If an object is being used to hold elements of state, the spread operator will be needed to allow the whole object to be changed with all of the properties. See about 13:00 in the video by Web Dev Simplified. Best to just have separate definitions, rather than try to use an object for state.</li>
                <li>Every useState must be run every time there is a render. So, no if statements or similar to decide whether to run useState.</li>
            </ul>
        </>
    )
}


