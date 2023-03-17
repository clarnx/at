
import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import React from 'react'
import Image from 'next/image'

import heroImage from "../public/hero-image.jpg"
import logo from "../public/logo.jpeg"
import EarthCanvas from '../src/components/EarthCanvas'
import Link from 'next/link'
import MediaCard from '../src/components/MediaCard'



export default function Home() {
  return (
   <div>    
   <React.Fragment>
      <Navbar/>
    </React.Fragment>
    <div className='hero'>
      <div className='title'>Lorem Ipsum Dolor</div>
      <button className='click'>Get mentored</button>
      <div className='earth'><EarthCanvas/></div>
    </div>
    <div className='about'>
      <div>About Us</div>
      <div className='about-text'>
        <div className='text'>
          <h1>This is what we do</h1>
          <p>lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </p>
        </div>
        <div className='image' >
          <Image width="100%" height="100%" src={heroImage}/></div>
      </div>
    </div>
    <div className='test'>
      <div>Testimonials</div>
     <MediaCard/>
    </div>
    
    
  
  </div>

  );
}
