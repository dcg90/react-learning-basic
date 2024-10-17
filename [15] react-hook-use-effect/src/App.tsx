import MyComponent2 from "./MyComponent2"

// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(function, [dependencies]?)

// 1. useEffect(() => {})           // Runs after every re-render
// 2. useEffect(() => {}, [])       // Runs only on mount
// 3. useEffect(() => {}, [value])  // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time udpates)
// #4 Fetching data from an API
// #5 Clean up when a component unmounts

function App() {
    // return <MyComponent1 />
    return <MyComponent2 />
}

export default App
