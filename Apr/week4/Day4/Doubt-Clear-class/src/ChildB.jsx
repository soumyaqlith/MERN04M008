import React from 'react'

function ChildB(props) {
    return (
        <div>
            ChildB
            <br />
            Child b COunt : {props.count}

            <br />

            {props.children}
        </div>
    )
}

export default ChildB