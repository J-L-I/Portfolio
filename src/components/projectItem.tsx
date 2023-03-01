import React from 'react'

function ProjectItem(project: {title: string, imgUrl: string, stack: string[], linkUrl: string}): JSX.Element {
    return (
        <div className="rounded-md border-2 border-blue-900 overflow-hidden">
            <a href="https://github.com/J-L-I/Portfolio" target="_blank" rel="noreferrer noopener"><img src={project.imgUrl} alt="Project" className="w-full h-36 md:h-48 object-cover cursor-pointer"/></a>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{project.title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-sm md:text-sm">
                    {project.stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-blue-900 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default ProjectItem;