
import './App.css'
import About from './component/About'
import Card from './component/Card'
import Home from './component/Home'

function App() {

  function fun() {
    console.log("this is a new function")
  }

  let animals = [
    {
      img: "https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750",
      title: "Cat image",
      desc: "this is pet cat",
      btn: "view cat"
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/008/951/892/small/cute-puppy-pomeranian-mixed-breed-pekingese-dog-run-on-the-grass-with-happiness-photo.jpg",
      title: "Dog image",
      desc: "this is pet dog",
      btn: "view dog"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40jv5N_DgTkguyQhhVqp1SxOaN8Vhb_q5ZA&s",
      title: "Peacock image",
      desc: "this is the national bird",
      btn: "view peacock"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBizi3gBF-ljvevvcTOibtaCaf8FsvIgSUg&s",
      title: "Tiger image",
      desc: "this is the national animal",
      btn: "view tiger"
    },
    {
      img: "https://thumbs.dreamstime.com/b/holy-indian-cow-eating-grass-india-south-tamil-nadu-38330490.jpg",
      title: "Cow image",
      desc: "this is domestic animal",
      btn: "view cow"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZIkPH6FaHrY84AORX0X7cAw_BMNYISK3vA&s",
      title: "Elephant image",
      desc: "this is big animal",
      btn: "view elephant"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZIkPH6FaHrY84AORX0X7cAw_BMNYISK3vA&s",
      title: "Giraffe image",
      desc: "this is tallest animal",
      btn: "view giraffe"
    }
  ]


  return (
    <>
      <h1>this is the App page</h1>
      <Home obj={{ name: "tunguru", age: 50 }} func={fun} />
      {/* <About/> */}

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 p-5'>
        {
          animals?.map((v, i) => (
            <Card animal={animals[i]}></Card>
          ))
        }
      </div>
    </>
  )
}

export default App
