import React, { ReactNode } from 'react'

function SkillItem(skills: { tech: string, level: string, icon: ReactNode }): JSX.Element {
    return (
        <div className="rounded-md border-2 border-blue-300 bg-stone-900 overflow-hidden">
            <div className="w-full p-4">
                <h3 className="flex justify-center">{skills.icon}</h3>
                <h3 className="text-white text-lg md:text-xl mb-2 md:mb-3 font-semibold">{skills.tech}</h3>
                <h3 className="text-white">{skills.level}</h3>
            </div>
        </div>
    )
}

export default SkillItem;