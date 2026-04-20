
import { useState } from 'react'
import './App.css'

function App() {
  const [isBlack, setIsBlack] = useState(false);

  function handleClick() {
    if (isBlack) {
      setIsBlack(false)
    } else {
      setIsBlack(true)
    }
  }

  return (
    <div className={`${isBlack ? "bg-white" : "bg-black"} h-screen p-3`}>
      <h1>Hello</h1>
      <div>
        <button onClick={handleClick} className='p-1 pl-2 pr-2 bg-red-300 text-white rounded'>{isBlack ? "White" : "Black"}</button>
      </div>
    </div>
  )
}

export default App
