import React, { useContext } from 'react'
import { emplContext, stdContext } from './App';

function Child() {

    const std = useContext(stdContext);
    const emp=useContext(emplContext);
    console.log(std);
    console.log(emp);
    return (
        <div>
            Child
        </div>
    )
}

export default Child