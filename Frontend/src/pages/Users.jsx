import React, { useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Alice", role: "Admin" },
        { id: 2, name: "Bob", role: "User" },
        { id: 3, name: "Charlie", role: "HR" },
        { id: 4, name: "Diana", role: "User" },
        { id: 5, name: "Ethan", role: "User" },
        { id: 6, name: "Fiona", role: "User" },
        { id: 7, name: "George", role: "HR" },
        { id: 8, name: "Hannah", role: "User" },
        { id: 9, name: "Ian", role: "User" },
        { id: 10, name: "Jane", role: "User" },
        { id: 11, name: "Kyle", role: "HR" },
        { id: 12, name: "Laura", role: "User" },
        { id: 13, name: "Mike", role: "HR" },
        { id: 14, name: "Nina", role: "User" },
        { id: 15, name: "Oscar", role: "HR" },
        { id: 16, name: "Paula", role: "User" },
        { id: 17, name: "Quinn", role: "User" },
        { id: 18, name: "Rachel", role: "User" },
        { id: 19, name: "Sam", role: "HR" },
        { id: 20, name: "Tina", role: "User" }
    ]);

    const handleRemove = (id) => {
        const confirmation = window.confirm("Are you sure to delete this?");
        if(confirmation) {
            const newUsers = users.filter(ele => ele.id != id);
            setUsers(newUsers);
        }
    }

  return (
    <div className='bg-slate-400 p-12'>
        {
            users.map(ele => {
                return <div key={ele.id} className='bg-slate-300 flex items-center justify-between border m-2 p-4 rounded'>
                    <p>{ele.name}</p>
                    <p>{ele.role}</p>
                    <p className='flex gap-1'>
                        <button className='bg-yellow-300 px-3 py-1 text-white font-semibold rounded hover:scale-105 cursor-pointer'>Details</button>
                        <button className='bg-red-500 px-3 py-1 text-white font-semibold rounded hover:scale-105 cursor-pointer' onClick={() => {
                            handleRemove(ele.id);
                        }}>Remove</button>
                    </p>
                </div>
            })
        }
    </div>
  )
}

export default Users