import React from 'react'
import resume from './data/resumeData'
import ResumeItem from './resumeItem'

function Resume(): JSX.Element {
    return  (
        <div className="flex flex-col md:flex-row justify-center my-20 pb-10 border-b" id="experience">
            <div className="w-full md:w-7/12 mt-10">
                <h1 className="flex flex-col md:flex-row justify-center mb-8 text-xl mt-5">Experience</h1>
                {resume.map(job => (
                    <ResumeItem 
                        year={job.year}
                        title={job.title}
                        description={job.description}
                    />
                ))}
            </div>
        </div>
    )
    }

export default Resume;