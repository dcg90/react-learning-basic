import { createContext } from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext("Guest")

// ComponentA is the PROVIDER
export default function ComponentA() {
    const user = "BroCode"

    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>Hello: {user}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    )
}
