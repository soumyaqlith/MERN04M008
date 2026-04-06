import React, { useState } from 'react'

function Home() {

    // useState()
    //  it is used to maintain the state

    // syntax of useState
    //  const [variable,function(this is fun used to update the variable)]=useState(intialization value)


    let [a, setA] = useState(0);
    const [obj, setObj] = useState({})
    const [users, setUsers] = useState([]);

    const [boolean, setBoolean] = useState(true);
    console.log(boolean);

    let b = 6;

    const handleClick = () => {
        // console.log("hii click");
        // a = a + 1;
        // console.log("a value ", a);

        setA(a + 1);
        b = b + 1;
        console.log(b)
    }

    console.log("hello");


    return (
        <div>
            Home
            <br />
            value : {a}
            <br />
            <button onClick={handleClick}>Inc</button>
        </div>
    )
}

export default Home