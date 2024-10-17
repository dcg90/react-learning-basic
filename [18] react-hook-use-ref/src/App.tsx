import MyComponent from "./MyComponent"

// useState() = re-renders the compoenent when the state value changes

// *useRef()* = "use Reference" Does not cause re-renders when its value changes.
//              when you want a component to "remember" some information,
//              but you don't want that information to trigger new renders.

//              1. Accessing/Interacting with DOM elements
//              2. Handling Focus, Animations, and Transitions
//              3. Managing Timers and Intervals

function App() {
    return <MyComponent />
}

export default App
