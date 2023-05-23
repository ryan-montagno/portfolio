import React from 'react'
import ProjectItem from './ProjectItem'
import amazonImg from '../assets/amazon.png'
import handshakeImg from '../assets/handshake.png'
import pexelsImg from '../assets/pexels.png'
import youtubeImg from '../assets/youtube.png'

const Projects = () => {
  return (
    <div className='bg-[#001b5e]'>
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-stone-200'>Projects</h1>
        <p className='text-center py-8 text-stone-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repudiandae sequi eos, veritatis, delectus laboriosam iusto a pariatur at cum sed fugiat, non accusantium libero tempora ut. Nesciunt, earum quisquam.</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={amazonImg} title='Amazon App'/>
            <ProjectItem img={handshakeImg} title='HandShake App'/>
            <ProjectItem img={pexelsImg} title='Pexels App'/>
            <ProjectItem img={youtubeImg} title='Youtube App'/>
        </div>
      </div>
    </div>
  )
}

export default Projects