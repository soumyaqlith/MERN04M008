import React, { useContext } from 'react'
import ChildB from './ChildB'
import { themeContext } from './App'

function ChildA(props) {

    const theme = useContext(themeContext)

    return (
        <div>

            ChildA
            <br />
            Count :{props.count}
            <br />

            Color : {theme}
            <br />

            <ChildB count={props.count} children="this is the default children">
                <h1>Hii i am children</h1>
            </ChildB>
        </div>
    )
}

export default ChildA