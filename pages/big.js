import { useState } from "react"

export default function Big() {
  
  const [count, setCount] = useState(22)
  
  return (
    <div style={{height: "300px", backgroundColor: "blue"}} className="p-5 m-5">

        <h1>Count: {count}</h1>
        <hr />
        <Small name="Small: Big invokes Small with a prop" count={count} aardvark={setCount}/>
        <Small name="Small: each one is a separate instance of the component" count={count}  aardvark={setCount}/>
    </div>
  )
}




function Small(props) {
    return (
      <>
        <h1>{props.name} [{props.count}]</h1>
        <button className="btn btn-warning" onClick={() => props.aardvark(Math.random())}>click me</button>
      </>
    )
}