import React, { useRef } from 'react';
import Navbar from "../src/components/Navbar"
import Link from 'next/link';
function recruit() {
  return (
    <section>
        <Navbar/>
        <section id="about">
    <div className="w-11/12 mx-auto h-80vh flex flex-row ">
        
    <div className='w-4/12 my-auto items-center justify-center'>
    <h1 className="text-3xl abt md:text-3xl sm:text-2xl font-bold text-left">Recruitment</h1>
    </div>
    <div className='w-8/12 ml-6 flex flex-col'>
      
      
      <p className="mt-4 text-[1rem] md:text-lg text-left">
      At Alt Tab Consulting, we understand the importance of mentoring by IT industry experience. That's why we have a team of experienced recruiters who have extensive knowledge of the IT industry and can guide job seekers towards their dream job. We also provide mentorship programs to help job seekers enhance their skills and knowledge to become successful in their IT career.
    <br/><br/>
We have job vacancies in various areas such as Business Analyst, Project Manager/Scrum Master and more. Our IT job search is designed to help you find the right job that matches your skills, experience, and career goals.
<br/><br/>
We offer a range of services to employers, including IT recruitment, staffing, executive search, headhunting, and talent acquisition. Our team of experienced recruiters has a thorough understanding of the IT industry and can help you find the right talent for your business. We work with companies of all sizes, from startups to Fortune 500 companies, to provide them with the best staffing solutions.
<Link href="/Contact" class="text-blue-400">Register</Link>
        </p>
        


      
      </div>
      
      
    

    
    </div>
    </section>
    </section>
  );
}

export default recruit