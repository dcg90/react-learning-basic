import { MouseEvent } from "react"

// export default function Button() {
//     // const handleClick = () => console.log("OUCH!")
//     const handleClick2 = (name: string) => console.log(`${name} stop clicking me!`)

//     return (
//         <>
//             <button onClick={() => handleClick2("bro")}>Click Me 😃</button>
//         </>
//     )
// }

// export default function Button() {
//     let count = 0
//     const handleClick = (name: string) => {
//         if (count < 3) {
//             count++
//             console.log(`${name} you clicked me ${count} time(s)`)
//         } else {
//             console.log(`${name} stop clicking me!`)
//         }
//     }

//     return (
//         <>
//             <button onClick={() => handleClick("Bro")}>Click Me 😃</button>
//         </>
//     )
// }

export default function Button() {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => (e.currentTarget.textContent = "OUCH! 🤕")

    return (
        <>
            <button onClick={handleClick}>Click Me 😃</button>
        </>
    )
}
