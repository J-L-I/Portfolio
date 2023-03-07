import React from 'react'

import project from './data/project_data'
import ProjectItem from './projectItem'

function Projects() {
    return  (
        <div>
            <h1 className="flex justify-center mt-20 pt-20 font-bold text-white" id="projects">Projects</h1>
            <h2 className="flex justify-center text-center text-white">Current projects I'm working on.  Most of these projects are just for learning and fun.<br />  Click the image to visit the repo.</h2>
            <div className="flex flex-col md:flex-row items-center justify-center mt-1 pb-10 h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {project.map(projects => (
                        <ProjectItem 
                            title={projects.title}
                            imgUrl={projects.imgUrl}
                            stack={projects.stack}
                            linkUrl={projects.linkUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;