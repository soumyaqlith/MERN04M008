
import About from './About'
import './App.css'
import Home from './Home'

function App() {
  let a = 50;
  return (
    <>
      <h1>Hello</h1>
      <Home value={a} str={"this is a app string"} arr={[1,2,4,5]}>
        <About />
        <h1>this is direct child</h1>
      </Home>
    </>
  )
}

export default App
