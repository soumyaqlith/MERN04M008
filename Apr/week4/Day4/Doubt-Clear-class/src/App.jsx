
import { useEffect, useRef, useState } from 'react'
import './App.css'
import ChildA from './ChildA';
import { createContext } from 'react';


export const themeContext = createContext()

function App() {
  const [count, setCount] = useState(0);

  // syntax
  // useEffect(() => {

  // }, [dependencies])

  // case 1
  // it will execute at every render
  // useEffect(()=>{
  //   console.log("this is the side effect")
  // })

  // case 2
  // it will execute at the first render only
  // useEffect(() => {
  //   console.log("this is the effect code")
  // }, [])

  // case 3
  // it will execute based on the dependencies
  // useEffect(()=>{
  //   console.log("this dep block");
  // },[count]);



  // steps for creating the useContext
  //  create the the context object
  // add the provider
  // add the value 
  // export the provider


  // how to access
  // using useCOntext()

  const btn = useRef();


  useEffect(() => {
    console.log(btn.current)
  })

  function handleChangeColor(){
    btn.current.style.backgroundColor="red"
  }

  return (
    <>
      <h1>hello</h1>
      Count : {count}
      <br />
      <div>
        <button onClick={() => setCount(count => count + 1)}>Inc</button> <br />
        <button onClick={() => setCount(count => count - 1)}>Dec</button>
      </div>

      <themeContext.Provider value={"dark"} >
        <ChildA count={count} ></ChildA>
      </themeContext.Provider>


      <br />
      <div>
        <button ref={btn} onClick={handleChangeColor}>Change color</button>
      </div>
    </>
  )
}

export default App
