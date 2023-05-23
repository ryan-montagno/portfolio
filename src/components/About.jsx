import React from 'react'
import { FaAngular, FaReact, FaHtml5, FaCss3, FaNodeJs} from 'react-icons/fa'

const About = () => {
    return (
        <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>About Me</h1>
            <div className='flex flex-col w-full item-center'>
                <p className='flex text-lg font-semibold text-[#001b5e] p-4 sm:p-8 md:p-20'>I am a web developer specializing in modern websites using the latest technologies. I create visually stunning designs, build responsive interfaces with React and Angular, and optimize performance with code minification and caching. I work with Node.js, Django, and databases like MongoDB and MySQL. I stay updated with the latest web trends to deliver intuitive and high-performance websites that exceed client expectations.</p>
            </div>
            <div className='flex justify-between pt-6 w-full'>
                <FaAngular size={60} />
                <FaReact size={60} />
                <FaHtml5 size={60} />
                <FaCss3 size={60} />
                <FaNodeJs size={60} />
            </div>
        </div>
    )
}

export default About