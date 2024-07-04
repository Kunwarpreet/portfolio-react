import React from 'react'

const Hero = () => {
  return (
    <section className='p-8 md:py-14 md:px-10 relative' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col flex-wrap justify-center lg:justify-normal lg:flex-row lg:py-8'>

            <div className='flex flex-col w-full lg:w-1/2 py-5'>
                <h1 className='font-bold text-3xl lg:text-5xl my-7 text-center leading-tight lg:text-left animate-pulse'>Front-End Developer</h1>
                <p className='text-center lg:text-left font-para text-lg'>Hey there! I'm Kunwarpreet Singh, your go-to UI Designer and Front-End Developer developing with Webflow from Amritsar, Punjab📍</p>
            </div>

            <div className=' flex items-center justify-center w-full lg:w-1/2'>
                <div className='sm:w-[300px] sm:h-[300px] rounded-[50%] flex items-center justify-center shadow-2xl xl:ml-[100px]'>
                  <picture>
                    <source media="(max-width: 639px)" srcSet="/assets/person_mobile.png"></source>
                    <source media="(min-width: 640px)" srcSet="/assets/person.png"></source>
                    <img src="/assets/person.png" alt="person" className='h-full w-full rounded-[50%] border-4 border-[color:var(--primary-color)]'/>
                  </picture>
                </div>
            </div>
            
        </div>
      </div>
    </section>
  )
}

export default Hero