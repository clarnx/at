import React, { useRef } from 'react';
import Navbar from "../src/components/Navbar"
import Link from 'next/link';
function mentor() {
  return (
    <section>
        <Navbar/>
        <section id="about">
    <div className="w-11/12 mx-auto h-80vh flex flex-row ">
        
    <div className='w-4/12 my-auto items-center justify-center'>
    <h1 className="text-3xl abt md:text-3xl sm:text-2xl font-bold text-left">Mentorship</h1>
    </div>
    <div className='w-8/12 ml-6 flex flex-col'>
      
      
      <p className="mt-4 text-[1rem] md:text-lg">
      Our team of experienced IT mentors provides expert guidance and coaching for job readiness, skills development, and job success. We believe that mentorship is a key component of professional growth and success, and we are committed to helping IT professionals achieve their goals.    <br/><br/>
      Our mentorship programs are tailored to your individual needs and career goals. We work with you to identify your strengths and areas for improvement, and we provide personalized guidance and support to help you achieve your goals. Our goal is to help you develop the skills and knowledge you need to succeed in the competitive world of IT.<br/><br/>
      In addition to our mentorship services, we also offer IT recruitment solutions to help companies find the right talent for their IT needs. Our team of experienced recruiters specializes in identifying and attracting top IT professionals, and we work closely with our clients to understand their specific hiring needs.
      <Link href="/Contact" class="text-blue-400">Register</Link>
        </p>
        


      
      </div>
      
      
    

    
    </div>
    </section>
    </section>
  );
}

export default mentor