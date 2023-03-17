import React from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useRef } from 'react'
import Image from 'next/image';
import logo from "../../public/logo.jpeg"
import Link from 'next/link';

function Navbar() {
  const navRef=useRef("");
  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header>
      <div className='logo'><Image height={80} src={logo} alt="logo"/></div>
      <nav ref={navRef}>
        <Link href="/#">Home</Link>
        <Link href="/#">Register</Link>
        <Link href="/#">Home</Link>
        <Link href="/#">Home</Link>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
        {/* <button className='login'>Login/Signup</button> */}
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
      
    </header>
  )
}

export default Navbar