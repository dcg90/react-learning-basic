export type UserGreetingProps = {
    isLoggedIn: boolean
    username: string
}

// export default function UserGreeting({ isLoggedIn, username }: UserGreetingProps) {
//     if (isLoggedIn) {
//         return <h2 className="welcome-message">Welcome {username}</h2>
//     }

//     return <h2 className="login-prompt">Please log in to continue</h2>
// }

export default function UserGreeting({ isLoggedIn, username }: UserGreetingProps) {
    const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>

    return isLoggedIn ? welcomeMessage : loginPrompt
}
