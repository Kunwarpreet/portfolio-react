import React from 'react';
const Portfolio = () => {

  return (
    <section className='p-8 md:py-20 md:px-10' id='portfolio'>

        <div className='container mx-auto'>

            <div className='mb-16'>
                <h3 className='font-bold text-[color:var(--primary-color)] text-center md:text-left text-xl mb-2'>Portfolio</h3>
                <h3 className='font-bold text-xl lg:text-3xl text-center md:text-left'>Each Project is an unique piece of development</h3>
            </div>

            <div className='flex flex-col md:flex-row w-full items-center justify-center md:justify-around gap-5 md:gap-0 mb-12'>
                <div className='w-[90%] md:w-1/2 flex items-center justify-center md:justify-start lg:justify-center'>
                    <video className='w-full sm:w-2/3 rounded-xl shadow-xl'> 
                        <source src='/assets/rentplusown.mp4'type='video/mp4'></source>
                    </video>
                </div>
                <div className='w-full md:w-1/2 flex flex-col'>
                    <h4 className='font-bold text-center md:text-left'>CAR RENTAL WEBSITE</h4>
                    <p className='my-4 font-para text-center md:text-left'>Discover seamless car rental experiences with our user-friendly website. Choose from a wide range of vehicles and enjoy hassle-free booking</p>
                    <ul>
                        <li className='text-center md:text-left'>
                            <a href="https://rentplusown.com/" className='underline' rel="noreferrer" target='_blank'>Live Demo</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className='flex flex-col flex-wrap items-center justify-center md:flex-row-reverse w-full md:justify-around mb-12 gap-5 md:gap-0'>
                <div className='w-[90%] md:w-1/2 flex items-center justify-center md:justify-end lg:justify-center'>
                    <video className='w-full sm:w-2/3 rounded-xl shadow-xl'> 
                        <source src='/assets/eathealthy.mp4'type='video/mp4'></source>
                    </video>
                </div>
                <div className='w-full md:w-1/2 flex flex-col'>
                    <h4 className='font-bold text-center md:text-left'>EAT HEALTHY WEBSITE</h4>
                    <p className='my-4 font-para text-center md:text-left'>Transform your lifestyle with our Eat Healthy website. Discover tools, tips, and recipes to cultivate lasting habits.</p>
                    <ul>
                        <li className='text-center md:text-left'>
                            <a href="https://eatlyhealthy.netlify.app/" className='underline' target='_blank' rel="noreferrer">Live Demo</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className='flex flex-col flex-wrap md:flex-row w-full items-center justify-center md:justify-around mb-12 gap-5 md:gap-0'>
                <div className='w-[90%] md:w-1/2 flex items-center justify-center md:justify-start lg:justify-center' >
                    <video className='w-full sm:w-2/3 rounded-xl shadow-xl'> 
                        <source src='/assets/portfolio_website.mp4'type='video/mp4'></source>
                    </video>
                </div>
                <div className='w-full md:w-1/2 flex flex-col'>
                    <h4 className='font-bold text-center md:text-left'>PORTFOLIO WEBSITE</h4>
                    <p className='my-4 font-para text-center md:text-left'>Building my online presence as a frontend developer with this portfolio website. Showing my creativity and skills with this stunning portfolio website.</p>
                    <ul>
                        <li className='text-center md:text-left'>
                            <a href="https://kunwarpreetportfolio.netlify.app/" className='underline' target='_blank' rel="noreferrer">Live Demo</a>
                        </li>
                    </ul>
                </div>
            </div>
            

        </div>

    </section>
  )
}

export default Portfolio