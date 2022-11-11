
export default function SimpleRender() {
    const element = (
        <div style={{color: "yellowgreen", border: "1px solid dodgerblue", padding: "20px"}}>
            <h1>Hello, there!</h1>
            <h2>Let&apos;s take a look inside a React element</h2>
        </div>
    )

    console.log(element)

    return element
}
