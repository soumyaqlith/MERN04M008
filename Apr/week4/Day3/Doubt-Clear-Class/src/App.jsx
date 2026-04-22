
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import AllRoutes from './routes/AllRoutes';

function App() {

  // const [users, setUsers] = useState([]);

  // async function getAllUsers() {
  //   try {
  //     // const response = await fetch("api");
  //     // const data = await response.json();

  //     const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  //     setUsers(result.data);

  //   } catch (error) {
  //     console.log("failed to fetch", error)
  //   }
  // }

  // useEffect(() => {
  //   getAllUsers()
  // }, [])

  return (
    // <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
    //   {
    //     users?.map((user) => (
    //       <div style={{ width: '400px', height: '400px', border: '1px solid blue', padding: '5px', overflow: 'auto' }}>
    //         <p>Name : {user.name}</p>
    //         <p>Email : {user.email}</p>
    //         <p>Phone : {user.phone}</p>
    //         <p>WEbsite : {user.website}</p>

    //         <h4>Company details</h4>
    //         <div>
    //           <p>Company bs : {user.company.bs}</p>
    //           <p>Company catchPhrase : {user.company.catchPhrase}</p>
    //           <p>Company name : {user.company.name}</p>
    //         </div>
    //         <h4>Adress</h4>
    //         <div>
    //           <p>city : {user.address.city}</p>
    //           <p>street : {user.address.street}</p>
    //           <p>zipcode : {user.address.zipcode}</p>
    //         </div>
    //       </div>
    //     ))
    //   }
    // </div>

    <div>
      <AllRoutes/>
    </div>
  )
}

export default App
