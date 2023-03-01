import React from 'react'
import getForm from './data/action'

function Contact(): JSX.Element {
    return  (
        <div className="flex flex-col" id="contact">
            <h1 className="flex flex-col justify-center items-center">Contact</h1>
            <div className="flex justify-center items-center">
                <form action={getForm.getForm} method="POST" className="flex flex-col w-96 md-w-7">
                    <input
                        className="p-2 border-2 my-2 rounded-md bg-transparent border-blue-100"
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    <input
                        className="p-2 border-2 my-2 rounded-md bg-transparent border-blue-100"
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                    <textarea
                        className="p-1 my-2 border-2 rounded-md bg-transparent border-blue-100"
                        name="message"
                        placeholder="Message"
                        rows={10}
                    />
                    <button type="submit" className="border-2 my-2 px-10 rounded-md bg-green-200 w-max">
                        Send
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Contact;