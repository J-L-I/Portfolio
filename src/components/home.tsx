import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Home() {
    return  (
        <div className="flex flex-col pt-20 pb-6 h-screen" id="home">
            <h2 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold ml-64 mt-64 text-white" id="home">Jerry Inman</h2>
            <h2 className="text-base md:text-2xl mb-3 ml-64 font-medium text-white">Full Stack Software Engineer</h2>
            <div className="flex space-x-5 ml-64">
                <a href="https://github.com/J-L-I" rel="noreferrer noopener" target="_blank" className="transition duration-200 hover:scale-125"><BsGithub size="2rem" color="blue"/></a>
                <a href="https://www.linkedin.com/in/jerry-inman-7a62ab193/" rel="noreferrer noopener" target="_blank" className="transition duration-200 hover:scale-125"><BsLinkedin size="2rem" color="blue"/></a>
            </div>
            <img />
        </div>
    )
}

export default Home;