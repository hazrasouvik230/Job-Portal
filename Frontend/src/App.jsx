import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Companies from './Companies'
import { CarouselSpacing } from './CarouselSpacing'
import JobPilot from './JobPilot'
import { DropdownMenuDemo } from './DropdownMenuDemo'

const App = () => {
  return (
    <>
      <Navbar />
      <Companies />
      <JobPilot />
      <CarouselSpacing />
      <Footer />
      {/* <DropdownMenuDemo /> */}
    </>
  )
}

export default App