import React from 'react'

function ResumeItem(job: {year: string, title: string, description: string}): JSX.Element {
    return(
        <ol className="flex flex-col md-flex-row border-blue-300">
            <li className="mb-9 ml-3">
                <div className="w-3 h-3 rounded-full mt-1.5" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-center text-sm md:text-sm">
                    <span className="inline-block px-2 py-2 font-bold rounded-md text-white">
                        {job.year}
                    </span>
                    <span className="text-md font-bold text-white">
                        {job.title}
                    </span>
                    <span className="my-1 text-md font-semibold leading-non text-white">
                        {job.description}
                    </span>
                </p>
            </li>
        </ol>
    )
}

export default ResumeItem;