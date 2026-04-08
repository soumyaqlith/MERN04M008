import React from 'react'
import { useLocation, useParams } from 'react-router'

function UserDetails() {
    const { userId } = useParams();

    // findout the location
    const location = useLocation();

    // refining the search using the location
    const query = new URLSearchParams(location.search);

    // from the urlSearchParam object get the query values
    const name = query.get("name");
    const age = query.get("age");

    return (
        <div>
            UserDetails
            <br />
            User Id :{userId}
            <br />
            Name : {name}
            <br />
            Age : {age}
        </div>
    )
}

export default UserDetails