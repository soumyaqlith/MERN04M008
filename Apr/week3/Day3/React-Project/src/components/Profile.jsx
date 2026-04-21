import React, { useEffect, useState } from 'react'

const Profile = () => {

    const [loginUser, setLoginUser] = useState({});

    useEffect(() => {
        setLoginUser(JSON.parse(localStorage.getItem("loginUser")));
    }, [])

    return (
        <div className='h-[90vh] flex justify-center items-center'>
            <div className='w-100 h-70 rounded shadow-2xl shadow-red-300'>
                <h1 className='text-xl font-extrabold text-center text-orange-500 underline'>User Details</h1>

                <p><strong>Name :</strong>{loginUser.fullName}</p>
                <p><strong>Email :</strong>{loginUser.email}</p>
                <p><strong>Phone :</strong>{loginUser.phone}</p>
            </div>
        </div>
    )
}

export default Profile
