// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import MiniSidebar from './MiniSidebar'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Dashboard from './Dashboard'
// import CreateJob from './CreateJob'
// import { Toaster } from 'sonner'
// import Home from './pages/Home'

// const App = () => {
//   return (
//     <>
//       <Toaster position="top-center" richColors />
//       <Navbar />
//       <Home />
//       <Footer />
//       <BrowserRouter>
//         <MiniSidebar />
//         <Routes>
//           <Route path='/dashboard' element={<Dashboard />} />
//           <Route path='/create-job' element={<CreateJob />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App


import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MiniSidebar from './MiniSidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import CreateJob from './CreateJob'
import { Toaster } from 'sonner'
import Home from './pages/Home'
import Users from './pages/Users'
import Jobs from './pages/Jobs'
import AppliedJobs from './pages/AppliedJobs'
import SavedJobs from './pages/SavedJobs'
import Profile from './pages/Profile'
import JobDetails from './pages/JobDetails'
import Panel from './Panel'
import SpecificJobDetails from './SpecificJobDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Navbar />
      {/* <MiniSidebar /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-job' element={<CreateJob />} />
        <Route path='/users' element={<Users />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/jobs/:id' element={<JobDetails />} />
        <Route path='/applied-jobs' element={<AppliedJobs />} />
        <Route path='/saved-jobs' element={<SavedJobs />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/panel' element={<Panel />} />
        <Route path='/HR-specific-job-details/:id' element={<SpecificJobDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App