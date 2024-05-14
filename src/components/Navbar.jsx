import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [toggle,setToggle] = useState(false);

  return (
    <nav className='sticky top-0 bg-white z-10 shadow-md sm:shadow-none '>
      <div className='container mx-auto flex items-center justify-between px-6 py-12 md:py-5 md:px-3 w-full'>

        <h3 className='font-bold text-xl cursor-pointer'>Kunwarpreet.Dev</h3>

        <div className='hidden md:flex items-center gap-3'>
          
          <ul className='flex items-center gap-5'>
              <li className='py-3'><Link to='home' smooth={true} offset={-40} className='duration-300 font-semibold cursor-pointer border-2 border-transparent hover:border-b-[color:var(--primary-color)] text-[color:var(--navbar-link-color)]'>Home</Link></li>

              <li className='py-3'><Link to='about' smooth={true} offset={-40} className='font-semibold cursor-pointer border-2 border-transparent hover:border-b-[color:var(--primary-color)] text-[color:var(--navbar-link-color)]'>About</Link></li>

              <li className='py-3'><Link to='services' smooth={true} offset={-40} className='duration-300 font-semibold cursor-pointer border-2 border-transparent hover:border-b-[color:var(--primary-color)] text-[color:var(--navbar-link-color)]'>Services</Link></li>

              <li className='py-3'><Link to='portfolio' smooth={true} offset={-40} className='duration-300 font-semibold cursor-pointer border-2 border-transparent hover:border-b-[color:var(--primary-color)] text-[color:var(--navbar-link-color)]'>Portfolio</Link></li>
              
              <li className='py-3'><Link to='contact' smooth={true} className='duration-300 font-semibold cursor-pointer border-2 border-transparent hover:border-b-[color:var(--primary-color)] text-[color:var(--navbar-link-color)]'>Contact</Link></li>
          </ul>

        </div>

        {/* mobile nav */}

        <div className='md:hidden'>
          <button onClick={()=>setToggle(!toggle)}><FaBars fontSize={20}/></button>
        </div>

        <div className={`md:hidden ${toggle?'block':'hidden'} w-full fixed inset-0 bg-white min-h-screen z-10 px-6 py-12`}>

          <div className='flex items-center justify-between'>
            <h1 className='font-extrabold text-xl cursor-pointer'>Kunwarpreet.Dev</h1>

            <div>
              <button onClick={()=>setToggle(!toggle)}><IoClose fontSize={25} className='cursor-pointer'/></button>
            </div>
            
          </div>

          <ul className='mt-8'>
            <li className='py-3'><Link to='home' smooth={true} offset={-100} className='duration-300 cursor-pointer border-2 border-transparent hover:border-b-[color:var(--primary-color)]' onClick={()=>setToggle(!toggle)}>Home</Link></li>

            <li className='py-3'><Link to='about' smooth={true} offset={-100} className='duration-300 cursor-pointer border-2 border-transparent hover:border-b-[color:var(--primary-color)]'onClick={()=>setToggle(!toggle)}>About</Link></li>

            <li className='py-3'><Link to='services' smooth={true} offset={-100} className='duration-300 cursor-pointer border-2 border-transparent hover:border-b-[color:var(--primary-color)]'onClick={()=>setToggle(!toggle)}>Services</Link></li>

            <li className='py-3'><Link to='portfolio' smooth={true} offset={-100} className='duration-300 cursor-pointer border-2 border-transparent hover:border-b-[color:var(--primary-color)]'onClick={()=>setToggle(!toggle)}>Portfolio</Link></li>
            
            <li className='py-3'><Link to='contact' smooth={true} offset={-100} className='duration-300 cursor-pointer border-2 border-transparent hover:border-b-[color:var(--primary-color)]'onClick={()=>setToggle(!toggle)}>Contact</Link></li>
          </ul>

        </div>
      
      </div>
    </nav>
  )
}

export default Navbar