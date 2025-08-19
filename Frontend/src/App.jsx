import React from 'react'
import Navbar from './Navbar'
import Companies from './Companies'
import JobPilot from './JobPilot'
import { CarouselSpacing } from './CarouselSpacing'
import Footer from './Footer'
import Hero from './Hero'
import Info from './Info'
import MiniSidebar from './MiniSidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import CreateJob from './CreateJob'

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <Companies />
      <JobPilot />
      <CarouselSpacing />
      <Footer /> */}
      {/* <Info /> */}
      <BrowserRouter>
        <MiniSidebar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/create-job' element={<CreateJob />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App