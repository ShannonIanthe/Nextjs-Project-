import React from 'react'
import { loremIpsum } from 'lorem-ipsum'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651ef]'>About</p>
            <h2 className='py-4'>Who I am</h2>
            <p className='py-2 text-gray-600'>// I am not your normal developer</p>
            <p className='py-2 text-gray-600'>I am a seasoned and independent Front End Developer with 2 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.</p>
            <p className='py-2 text-gray-600'>Front End Web Developer Seasoned and independent Front End Developer with 2 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.</p>
            <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex  items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About