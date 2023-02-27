import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Home() {
    return  (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h2 className="text-4xl md:text-6xl mb-1 md:mb-3 font-bold">Jerry Inman</h2>
            <h2 className="text-base md:text-2xl mb-3 font-medium">Full Stack Software Engineer</h2>
            <p className="text-lg max-w-xl mb-5">
                Welcome and thanks for checking out my website.<br />  I'm a budding software engineer looking for new opportunities.<br />
                This site is meant to be an overview of my skills, current projects, and a small introduction to me as a person.
                My current focus is building a portfolio of projects, with this site being one of them.<br />
            </p>
            <div className="flex space-x-5">
                <a href="https://github.com/J-L-I" rel="noreferrer noopener" target="_blank" className="transition duration-200 hover:scale-125"><BsGithub size="2rem" color="blue"/></a>
                <a href="https://www.linkedin.com/in/jerry-inman-7a62ab193/" rel="noreferrer noopener" target="_blank" className="transition duration-200 hover:scale-125"><BsLinkedin size="2rem" color="blue"/></a>
            </div>
        </div>
    )
}

export default Home;