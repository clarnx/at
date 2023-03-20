
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
    
    <section className=" hero h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
  <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Alt Tab Consulting</h1>
  <p className="text-white mt-4 text-lg md:text-xl">Let's make the shift</p>
  <a href="#about" className="inline-block click font-bold py-2 px-6 mt-4 rounded-full">Get Started</a>
</section>
      
    <section id="about">
    <div className="h-screen flex flex-row ">
        
    <div className='w-4/12 ml-10 my-auto items-center justify-center'>
    <h1 className="text-4xl abt md:text-6xl font-bold text-left">What <br/> we <br/> Provide</h1>
    </div>
    <div className='w-8/12 ml-6 flex flex-col'>
      <div className='h-3/6'>
      
      <h1 className='mt-10 text-2xl md:text-4xl text-left underline'>Mentorship Services</h1>
      <p className="mt-4 text-[2rem] md:text-xl text-left" >We offer personalized mentorship programs for IT job seekers, as well as career mentoring for IT professionals seeking to develop their skills and advance in their careers.
      <Link href="/mentor" className='text-blue-400'>Read More</Link></p>
      
      </div>
      <h1 className='mt-10 text-2xl md:text-4xl text-left underline'>Recruitment Services</h1>
      <p className="mt-4 text-[2rem] md:text-xl text-left">We are a leading recruitment agency that specializes in providing top-notch HR services to both job seekers and employers in the IT industry. Our mission is to help talented individuals find the best IT career opportunities and assist companies in finding the right staffing solutions for their businesses.
      <Link href="/recruit" className='text-blue-400'><br/>Read More</Link></p>
    
    </div>
 

</div>


    </section>
  </section>

  );
}
