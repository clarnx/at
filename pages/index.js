
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
    <div className='test'>
      <div>Testimonials</div>
     <MediaCard/>
    </div>
    
    
  
  </div>

  );
}
