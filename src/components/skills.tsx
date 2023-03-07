import React from 'react'
import skills from './data/skillsData'
import SkillItem from './skill_Item'

function Skills() {
    return (
        <div className="h-screen">
            <h1 className="flex justify-center mb-20 pt-20 font-bold text-white" id="skills">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 text-center mb-4">
                {skills.map(skill => (
                    <SkillItem
                        tech={skill.tech}
                        level={skill.level}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills;