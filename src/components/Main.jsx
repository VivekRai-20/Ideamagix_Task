import React from 'react'
import { MainNav } from './MainNav'
import { Overview } from './Overview'
import { Combined } from './Combined'
import TopDoctors from './TopDoctors'
import RecommendedHospitals from './RecommendedHospitals'

export const Main = () => {
  return (
    <div>
        <MainNav/>
        <Overview/>
        <Combined/>
        <TopDoctors/>
        <RecommendedHospitals/>

    </div>
  )
}
