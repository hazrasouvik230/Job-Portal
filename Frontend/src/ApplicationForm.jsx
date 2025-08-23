import React from 'react'

const ApplicationForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        ApplicationForm

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Enter your name: </label>
                <input type="text" name="name" id="name" className='border' />
            </div>
            <div>
                <label htmlFor="email">Enter your email: </label>
                <input type="text" name="email" id="email" className='border' />
            </div>
            <div>
                <label htmlFor="phone">Enter your phone: </label>
                <input type="text" name="phone" id="phone" className='border' />
            </div>
            <div>
                <label htmlFor="resume">Add resume: </label>
                <input type="file" name="resume" id="resume" className='border' />
            </div>
            <div>
                <label htmlFor="cover-letter">Add cover letter: </label>
                <input type="file" name="cover-letter" id="cover-letter" className='border' />
            </div>

            <input type="submit" value="Apply" className='bg-green-500/50 px-6 py-2 rounded cursor-pointer hover:scale-105 hover:font-bold hover:bg-lime-400 hover:shadow-xl duration-300' />
        </form>
    </div>
  )
}

export default ApplicationForm