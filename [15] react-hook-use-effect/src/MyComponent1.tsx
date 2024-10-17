import { useEffect, useState } from "react"

export default function MyComponent1() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    // When the component mounts and count changes
    useEffect(() => {
        document.title = `Count: ${count} - ${color}`
    }, [count, color])

    const increment = () => setCount(c => c + 1)

    const decrement = () => setCount(c => c - 1)

    const colorChange = () => setColor(c => (c === "green" ? "red" : "green"))

    return (
        <>
            <p style={{ color }}>Count: {count}</p>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Subtract</button> <br />
            <button onClick={colorChange}>Change color</button>
        </>
    )
}
