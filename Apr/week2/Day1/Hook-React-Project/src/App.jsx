
import { createContext } from 'react'
import './App.css'
import Child from './Child'
import Home from './Home';

// for createing the context object
const stdContext = createContext();
const emplContext = createContext({})

function App() {

  //  create the context object
  // add the provider to a particular component
  // add the value to the provider
  // export the context object

  // how to access the context object in child component
  // use the hook (useContext) and get the value 

  return (
    <>
      <h1>Welcom page</h1>

      <stdContext.Provider value={20}>
        <emplContext.Provider value={{ name: "hello", age: 90, email: "bye@gmail.com" }}>
          <Child />
        </emplContext.Provider>
      </stdContext.Provider>

      <Home></Home>
    </>
  )
}

export { stdContext, emplContext }
export default App
