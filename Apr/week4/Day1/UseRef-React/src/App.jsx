
import { useEffect, useRef } from 'react'
import './App.css'

function App() {

  const btnRef = useRef()
  const divRef = useRef()

  // btnRef.current = 30;


  useEffect(() => {
    console.log(btnRef.current.innerText);
    // try {
    //   throw new Error("hello this is error")
    // } catch (error) {
    //   console.log(error)
    // } finally {
    //   console.log("hjhjhiiuhuh")
    // }
  }, [])


  function handleChangeColor(){
    divRef.current.style.backgroundColor="red";
    divRef.current.innerText="This is the paragraph"
  }

  return (
    <div>
      <h1>Hello</h1>
      <button ref={btnRef}>Click</button>

      <div ref={divRef} style={{ border: '1px solid blue', width: '200px', height: '200px' }}>

      </div>

      <button onClick={handleChangeColor}>Change color</button>
    </div>
  )
}

export default App
