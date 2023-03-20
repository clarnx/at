
import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import heroImage from "../public/hero-image.jpg"
import logo from "../public/logo.jpeg"
import Link from 'next/link'



export default function Home() {
  return (
   <section>
    <Head>
    <meta charset="UTF-8"/>
  <meta name="description" content="Job Consulting in Australia"/>
  <meta name="keywords" content="Alt Tab Consulting"/>
  <meta name="keywords" content="Job Consulting in Australia"/>
  <meta name="author" content="Ashish Kakkan"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Alt Tab Consulting</title>
      
      </Head>    
   <React.Fragment>
      <Navbar/>
    </React.Fragment>
    <section className='hero'>
    <div className="mx-auto z-[1] flex justify-center items-center w-full h-full">
        <div className="flex flex-col gap-24 text-center">
          {/* CHILD 1 */}
          <div className="flex flex-col md:justify-center md:items-center pt-[10rem] pb-[10rem]">
            <h1 className="font-bold tracking-wide mb-3 text-white text-base sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Alt Tab Consulting
            </h1>
            <p className="font-normal leading-8 text-white text-[3vw]">
              Lets make the shift
            </p>
            <a className='mt-5 click py-2 px-4 md:py-3 md:px-6 w-full md:w-auto max-w-xs rounded-full' href="#about">
  <button class="w-full md:w-auto font-bold py-2 px-4 md:py-3 md:px-6 rounded-full">
    Get Started
  </button>
</a>
          </div>
          {/* CHILD 2 */}
        </div>
      </div>
      </section>
    <section id="about">hello</section>
  </section>

  );
}
