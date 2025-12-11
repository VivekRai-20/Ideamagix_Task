import React from 'react'
import { Header } from './Header'
import { Hero } from './Hero'
import {Main} from "./Main"
import Footer from './Footer'


export const UserLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
    <Header/>
    <Hero/>
    <Main/>
    <Footer/>
    
    </div>
  )
}
