import { useContext } from "react"
import { UserContext } from "./ComponentA"

// ComponentD is a CONSUMER
export default function ComponentD() {
    const user = useContext(UserContext)

    return (
        <div className="box">
            <h1>Component D</h1>
            <h2>Bye {user}</h2>
        </div>
    )
}
