import { useEffect, useState } from "react"

export default function MyComponent2() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    // BAD: Every time the component re-renders an event listener is added
    // USE EFFECT!
    // window.addEventListener("resize", handleResize)

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        // return cleanup function / logic
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width}x${height}`
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    )
}
