import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaWebflow } from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";
import { FaWordpress } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className='bg-[color:var(--background-color)] '>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-8  py-16'>
          <p className='border-b-2 md:border-b-0 md:border-r-4 md:pr-4 text-xl font-semibold'>Technologies</p>
          <div className='flex flex-wrap items-center justify-center gap-3'>

            <div className='flex gap-5'>
              <FaHtml5 fontSize={70} color='var(--html-logo)' />
              <FaCss3Alt fontSize={70} color='var(--primary-color)' />
            </div>

            <div className='flex gap-5'>
              <IoLogoJavascript fontSize={70} color='var(--js-logo)' />
              <FaReact fontSize={70} color='var(--react-logo)' />
              <CgFigma fontSize={60} color='#9d56f7'/>
            </div>

            <div className='flex gap-5'>
              <SiTailwindcss fontSize={70} color='var(--primary-color)' />
              <FaWebflow fontSize={70} color='var(--webflow-logo)' />
              <FaWordpress fontSize={70} color='#2994bf'/>
            </div>

          </div>

        </div>
      </div>
  )
}

export default Technologies