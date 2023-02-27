import React from 'react'

function Navbar() {
    return (
        <div className="container mx-auto">
            <ul className="flex space-x-10">
                <li className="cursor-pointer hover:text-blue-500 font-bold">Home</li>
                <li className="cursor-pointer hover:text-blue-500 font-bold">About</li>
                <li className="cursor-pointer hover:text-blue-500 font-bold">Projects</li>
                <li className="cursor-pointer hover:text-blue-500 font-bold">Contact</li>
                <li className="cursor-pointer hover:text-blue-500 font-bold">Resume</li>
            </ul>
        </div>
    )
}

export default Navbar;