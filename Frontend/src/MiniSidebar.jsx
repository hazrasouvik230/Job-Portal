import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePostAdd } from "react-icons/md";

const MiniNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-around py-2 shadow-lg'>
      <p className='border' onClick={() => navigate("/dashboard")}><RxDashboard />Dashboard</p>
      <p className='border' onClick={() => navigate("/create-job")}><MdOutlinePostAdd />Create Job</p>
    </div>
  )
}

export default MiniNavbar