import React from 'react'

function Navbar() {
    return (
        <div className="fixed w-full bg-neutral-100 py-4 dark:bg-neutral-600">
            <ul className="ml-10 mr-10 flex flex-no-wrap justify-between">
                <li className="cursor-pointer hover:text-blue-500 font-bold transition duration-200 hover:scale-125"><a href="#home">Home</a></li>
                <li className="cursor-pointer hover:text-blue-500 font-bold transition duration-200 hover:scale-125"><a href="#about">About</a></li>
                <li className="cursor-pointer hover:text-blue-500 font-bold transition duration-200 hover:scale-125"><a href="#projects">Projects</a></li>
                <li className="cursor-pointer hover:text-blue-500 font-bold transition duration-200 hover:scale-125"><a href="#experience">Experience</a></li>
                <li className="cursor-pointer hover:text-blue-500 font-bold transition duration-200 hover:scale-125"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;