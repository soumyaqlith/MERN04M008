import React, { useEffect, useState } from 'react'

function Home() {

    const [count, setCount] = useState(0)
    // useEffect(()=>{
    //     // coding part


    //     return ()=>{
    //         // return part
    //     }
    // },[dependencies])


    // case 1
    // it is execute at every render
    // useEffect(() => {
    //     console.log("it is execute at every render")

    //     return ()=>{
    //         console.log("value first removed")
    //     }
    // })

    // case 2
    // useEffect(() => {

    //     return ()=>{
    //         console.log("value first removed")
    //     }
    // })

    // case 3
    // it is execute at the first render only
    // useEffect(()=>{
    //     console.log("it is execute at the first render only")
    // },[])

    // case 4
    // based on dep
    useEffect(() => {
        console.log("it is execute based on count")
    }, [count])

    return (
        <div>
            Value : {count}
            <br />
            <button onClick={() => setCount(count => count + 1)}>
                Inc
            </button>
        </div>
    )
}

export default Home