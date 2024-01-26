import React from 'react'
import "./index.css"
export default function Button() {
  return (
    <>
      <div className='header'>
        <p>LOGO</p>
        <ul>
          <li className='home'>Home</li>
          <li>Courses</li>
          <li>Gallery</li>
          <li>About</li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button>Get Started</button>
      </div>
    </>
  )
}
