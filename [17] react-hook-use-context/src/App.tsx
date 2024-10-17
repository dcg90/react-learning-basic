// useContext() = React hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

// PROVIDER COMPONENT
// 1. import { createContext } from 'react'
// 2. export const MyContext = createContext()
// 3. Wrap child component(s) that will access context within the context
//      <MyContext.Provider value={someValueToPassDown}>
//          <Child />
//     </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import { useContext } from 'react'
//    import { MyContext } from './parent/component/Context'
// 2. const value = useContext(MyContext)

import ComponentA from "./ComponentA"

function App() {
    return <ComponentA />
}

export default App
