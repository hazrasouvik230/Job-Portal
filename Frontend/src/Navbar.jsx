import React, { useState } from 'react'
import LoginModal from './LoginModal'
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleClose = () => {
    setIsLoginOpen(false);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Users', path: '/users' },
    { label: 'Jobs', path: '/jobs' },
    { label: 'Applied Jobs', path: '/applied-jobs' },
    { label: 'Saved Jobs', path: '/saved-jobs' },
  ];

  return (
    <>
      <div className='flex items-center justify-between px-4 py-2 border-b shadow-md sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5'>
        <div className='border' onClick={() => navigate("/")}>Logo</div>

        <div className='flex gap-8'>
          {
            navLinks.map(ele => {
              const isActive = location.pathname === ele.path;
              return <p key={ele.label} className={`cursor-pointer hover:scale-105 hover:font-semibold duration-300 ease-in-out ${isActive ? "border-b-2 border-blue-600 font-semibold" : "" }`} onClick={() => navigate(ele.path)}>{ele.label}</p>
            })
          }
        </div>

        <div>
          <button className='bg-gray-400/50 px-3 py-1 rounded hover:bg-gray-500/50 sm:hidden'>X</button>
          <button className='hidden bg-sky-400/85 text-white font-semibold hover:scale-[1.20] px-6 py-1 rounded transition duration-500 ease-in-out sm:flex' onClick={() => setIsLoginOpen(true)}>Login</button>
        </div>
      </div>

      {
        isLoginOpen && <LoginModal handleClose={handleClose} />
      }
    </>
  )
}

export default Navbar