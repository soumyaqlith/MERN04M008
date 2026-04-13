
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [posts, setPosts] = useState([]);

  async function getAll() {
    try {
      // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      // const data = await response.json();
      // console.log(data)

      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      // console.log(res.data);
      setPosts(res.data)

    } catch (error) {
      alert("failed to fetch")
    }
  }

  // async function CreatePost(params) {
  //   try {
  //     const res=await axios.post("https://jsonplaceholder.typicode.com/posts",{
  //       title:"this is title",
  //       body:"this is the body"
  //     });

  //     console.log(res.data)

  //   } catch (error) {
  //     alert("failed to create")
  //   }
  // }

  // async function deletePosts(params) {
  //   try {
  //     const res=await axios.delete("https://jsonplaceholder.typicode.com/posts/3");
  //     console.log(res.data)

  //   } catch (error) {
  //     alert("failed to create")
  //   }
  // }

  useEffect(() => {
    getAll()
    // CreatePost()
    // deletePosts()
  }, [])



  return (
    <div>
      <h1>Hello</h1>

      <ul className='grid grid-cols-5 gap-1'>
        {posts?.map((post) => (
          <li key={post.id} className='p-3 bg-blue-300 shadow-xl text-white'>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
