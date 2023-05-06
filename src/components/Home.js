import React from 'react'
import Navbar from './Navbar';
import './Homestyle.css'
export default function Home() {
  return (
    <>
    <Navbar/>
    <div>
    <h1 className='headtext'>Welcome to Seminar Management System</h1>
      <div className='content-container'>
    <div style={{ 
      position: 'relative',
      height: 'calc(100vh - 64px)', /* subtracting the height of the navbar (64px) */
      backgroundImage: 'url("https://mitwpu.edu.in/assets/frontend/images/about-main-img.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
    </div>
  </div></div>
  </>
  )
}