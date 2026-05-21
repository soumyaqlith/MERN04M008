import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllUsers = () => {
    const token = localStorage.getItem("token")

    const [users, setUsers] = useState([])
    

    const getAllUsers = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_API}/user`, {
                headers: {
                    Authorization: token
                }
            });
            setUsers(res?.data?.users || []);
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div className='h-screen max-w-7xl m-auto bg-amber-200 overflow-auto p-2'>
            <h1 className='text-center font-bold text-2xl'>All Users</h1>
            <div className='grid grid-cols-4 gap-2'>
                {
                    users?.map((user)=>(
                        <div key={user._id} className='p-4 bg-blue-200 rounded-xl h-50'>
                            <h2><strong>Fullname : </strong>{user.fullName}</h2>
                            <p><strong>Age : </strong>{user.age}</p>
                            <p><strong>Email : </strong>{user.email}</p>
                            <span className="pl-2 pr-2 bg-green-400 rounded-4xl">{user.role}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllUsers
