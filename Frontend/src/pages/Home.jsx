import React from 'react'
import Hero from "@/Hero"
import Companies from '@/Companies'
import JobPilot from '@/JobPilot'
import { CarouselSpacing } from '@/CarouselSpacing'

const Home = () => {
  return (
    <>
        <Hero />
        <Companies />
        <JobPilot />
        <CarouselSpacing />
    </>
  )
}

export default Home