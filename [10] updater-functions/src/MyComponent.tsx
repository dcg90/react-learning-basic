import { useState } from "react"

export default function MyComponent() {
    const [count, setCount] = useState(0)

    /* Doesn't work if for some reason you need to UPDATE several times
    function increment() {
        // Uses CURRENT state to calculate NEXT state
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.

        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }*/

    function increment() {
        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order.

        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    function decrement() {
        // Good practice even if calling the setter once

        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    function reset() {
        setCount(0)
    }

    return (
        <>
            <p>Count: {count}</p>

            <button onClick={increment}>➕</button>
            <button onClick={reset}>❌</button>
            <button onClick={decrement}>➖</button>
        </>
    )
}
