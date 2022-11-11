import { useState } from "react"

export default function CounterWithError() {
    const [counter, counterSet] = useState(() => 10)

    const [statusMessage, statusMessageSet] = useState(() => "starting off...")

    function handleDecrease() {

        counterSet(prevCounter => prevCounter - 1)

        checkStatus()
    }
    function handleIncrease() {

        counterSet(prevCounter => prevCounter + 1)
        counterSet(prevCounter => prevCounter + 1)
        checkStatus()
      
    }

    function checkStatus() {
        if (counter >=10) {
            statusMessageSet("All clear")
        }

        if (counter < 10 && counter > 5) {
            statusMessageSet("Take Care")
        }

        if (counter <= 5) {
            statusMessageSet("Warning")
        }
    }

    function handleDismiss() {
        statusMessageSet(null)
    }
    return (
        <div className="text-white bg-blue-500">

            <h1 className="my-5 text-3xl">Counter with status</h1>

            <p className="text-2xl">MINUTES: {counter}</p>

            <button className="btn btn-primary" onClick={handleDecrease}>Decrease</button>

            <button className="btn btn-secondary" onClick={handleIncrease}>Increase</button>

            <button className="btn btn-warning" onClick={handleDismiss}>Dismiss status message</button>

                <p>{statusMessage && statusMessage}</p>

        </div>
    )
}
