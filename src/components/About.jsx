import React from 'react'

const About = () => {
  return (
    <section className='p-8 md:py-20 md:px-10' id='about'>
        <div className='container mx-auto'>

            <div className='flex flex-col lg:flex-row flex-wrap '>
                <div className='w-full flex justify-center lg:justify-normal lg:w-1/2 px-4 lg:px-7'>
                    <picture>
                        <source media="(min-width: 401px)" srcSet="/assets/about_img.webp"></source>
                        <img src="/assets/about_img.webp" alt="about" className='rounded-xl shadow-xl w-1/2 lg:w-full m-auto lg:m-0'/>
                  </picture>
                </div>

                <div className='w-full lg:w-1/2 px-4 mt-8 lg:mt-0 flex flex-col justify-end'>
                    <h4 className='text-center lg:text-left font-bold text-[color:var(--primary-color)] text-xl'>ABOUT ME</h4>
                    <h2 className='text-center lg:text-left font-bold text-xl lg:text-3xl mt-5'>Crafting Digital Delights: Meet Your Frontend Developer</h2>
                    <p className='text-center lg:text-left mt-5 font-para'>My passion is to create and develop a clean UI/UX for my users. I create user-centric interfaces that combine innovation with functionality.</p>
                    <p className='text-center lg:text-left mt-5 font-para'>Committed to collaboration and client satisfaction, I transform ideas into reality through clean code and intuitive design</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About