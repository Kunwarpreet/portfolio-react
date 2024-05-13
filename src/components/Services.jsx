import React from 'react'

const Services = () => {
  return (
    <section className='p-8 md:py-20 md:px-10 bg-[color:var(--background-color)]'id='services'>
        <div className='container mx-auto flex flex-wrap flex-col-reverse lg:flex-row items-center'>
            <div className='w-full lg:w-1/2'>
                <h2 className='font-bold text-xl lg:text-3xl mb-4 text-center lg:text-left'>Services We Provide</h2>
                <p className='mb-8 text-center lg:text-left font-para'>
                    Empower your online presence with our comprehensive web services. From design to development, we've got you covered.
                </p>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='md:w-1/2'>
                        <h4 className='font-semibold text-center lg:text-left'>UI Design</h4>
                        <p className='text-sm text-center lg:text-left md:mt-3 font-para'>We specialize in crafting captivating UI that elevate digital experiences, enhancing engagement and usability</p>
                    </div>
                    <div className='md:w-1/2'>
                        <h4 className='font-semibold text-center lg:text-left'>Static vs Dynamic Websites</h4>
                        <p className='text-sm text-center lg:text-left md:mt-3 font-para'>We provide static and dynamic website services, offering tailored solutions for both fixed-content and interactive online platforms</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4 mt-5'>
                    <div className='md:w-1/2'>
                        <h4 className='font-semibold text-center lg:text-left'>Responsive Web Design</h4>
                        <p className='text-sm text-center lg:text-left md:mt-3 font-para'>Develop your stunning websites  for all screen sizes,for best user experience.</p>
                    </div>
                    <div className='md:w-1/2'>
                        <h4 className='font-semibold text-center lg:text-left '>E-commerce Excellence</h4>
                        <p className='text-sm text-center lg:text-left md:mt-3 font-para'>We specialize in helping local businesses to establish a strong online presence through tailored digital solutions</p>
                    </div>
                </div>
            </div>

            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mb-10 lg:mb-0'>
                <img src="/assets/services.jpeg" alt="services" width={400} height={400} className='rounded-3xl shadow-xl'/>
            </div>
        </div>
    </section>
  )
}

export default Services