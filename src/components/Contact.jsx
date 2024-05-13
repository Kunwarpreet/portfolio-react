import React from 'react';
import { MdMyLocation } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin,FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <div className='p-8 md:py-20 md:px-10' id='contact'>
            <div className='container mx-auto flex flex-col'>
                <h4 className='text-center md:text-left font-bold text-xl text-[color:var(--primary-color)]'>CONTACT</h4>
                <h3 className='font-bold md:text-left text-xl lg:text-3xl text-center mt-4'>Don't be shy! Hit me up! 👇</h3>

                <div className='flex flex-col md:flex-row gap-12 mt-5'>
                    <div className='flex flex-col md:flex-row items-center justify-center mt-7 gap-4'>
                        <div className='flex items-center justify-center bg-white h-[50px] w-[50px] rounded-[50%] shadow-lg'>
                            <MdMyLocation fontSize={25} className='text-[color:var(--primary-color)]'/>
                        </div>
                        <div>
                            <h4 className='font-bold text-md text-center md:text-left'>Location</h4>
                            <p className='text-center md:text-left duration-300 hover:text-[color:var(--primary-color)] cursor-pointer font-para'>Amritsar, Punjab</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center mt-7 gap-4'>
                        <div className='flex items-center justify-center bg-white h-[50px] w-[50px] rounded-[50%] shadow-lg'>
                            <IoMdMail fontSize={25} className='text-[color:var(--primary-color)]'/>
                        </div>
                        <div>
                            <h4 className='font-bold text-md text-center md:text-left'>Mail</h4>
                            <a href='mailto:singhkunwarpreet797' className='text-center md:text-left   duration-300 hover:text-[color:var(--primary-color)] font-para'>singhkunwarpreet797@gmail.com</a>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>


        <div className='bg-[color:var(--navbar-link-color)] py-16 px-10 text-white rounded-2xl'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between'>
                <h3 className='font-bold text-center md:text-left'>Copyright © 2024. All rights are reserved</h3>

                <div className='flex gap-3 items-center justify-center mt-4 md:mt-0'>
                    <a href='https://www.linkedin.com/in/kunwarpreet-singh-390456196/' target='_blank'><FaLinkedin fontSize={25} className='duration-500 hover:text-[color:var(--primary-color)] font-bold'/></a>
                    
                    <a href="https://github.com/Kunwarpreet" target='_blank'><FaGithub fontSize={25} className='font-bold hover:text-[color:var(--primary-color)]'/></a>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Contact