import { RefObject, useEffect, useRef } from "react"

// export default function MyComponent() {
//     const ref = useRef(0)

//     const handleClick = () => {
//         ref.current++
//         console.log(ref.current)
//     }

//     useEffect(() => {
//         console.log("COMPONENT RENDERED")
//     })

//     return <button onClick={handleClick}>Click Me!</button>
// }

export default function MyComponent() {
    const inputRef1 = useRef<HTMLInputElement>(null)
    const inputRef2 = useRef<HTMLInputElement>(null)
    const inputRef3 = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    })

    function resetBg(input: RefObject<HTMLInputElement>, color?: string) {
        if (input?.current == null) return

        input.current.style.backgroundColor = color ?? ""
    }

    const handleClick1 = () => {
        if (inputRef1.current == null) return

        inputRef1.current.focus()
        resetBg(inputRef1, "yellow")

        resetBg(inputRef2)
        resetBg(inputRef3)
    }

    const handleClick2 = () => {
        if (inputRef2.current == null) return

        inputRef2.current.focus()
        resetBg(inputRef2, "yellow")

        resetBg(inputRef1)
        resetBg(inputRef3)
    }
    const handleClick3 = () => {
        if (inputRef3.current == null) return

        inputRef3.current.focus()
        resetBg(inputRef3, "yellow")

        resetBg(inputRef1)
        resetBg(inputRef2)
    }

    return (
        <div>
            <button onClick={handleClick1}>Click Me 1!</button>
            <br />
            <input ref={inputRef1} />

            <hr />

            <button onClick={handleClick2}>Click Me 2!</button>
            <br />
            <input ref={inputRef2} />

            <hr />

            <button onClick={handleClick3}>Click Me 3!</button>
            <br />
            <input ref={inputRef3} />
        </div>
    )
}
