import React from 'react'

import project from './data/project_data'
import ProjectItem from './projectItem'

function Projects() {
    return  (
        <div className="flex flex-col md:flex-row items-center justify-center pt-20 mt-20 border-b pb-10" id="projects">
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
    )
}

export default Projects;