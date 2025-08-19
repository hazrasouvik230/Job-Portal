import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 py-2 border-b shadow-md sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5'>
      <div>Logo</div>
      <div>
        <button className='bg-gray-400/50 px-3 py-1 rounded hover:bg-gray-500/50 sm:hidden'>X</button>
        <button className='hidden bg-sky-400/85 text-white font-semibold hover:scale-[1.20] px-6 py-1 rounded transition duration-500 ease-in-out sm:flex'>Login</button>
      </div>
    </div>
  )
}

export default Navbar