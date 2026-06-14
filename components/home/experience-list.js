import Image from 'next/image'
import { SectionHeader } from '../ui'
import { sectionIcon } from '../ui/icon-paths'

const experiences = [
    {
        school: 'Hangzhou Institute for Advanced Study, UCAS',
        period: 'Sep 2026 - July 2029',
        degree: 'M.E. in Artificial Intelligence',
        logo: '/cover/experience/UCAS-logo.png',
    },
    {
        school: 'Beijing Jiaotong University',
        period: 'Sep 2022 - July 2026',
        degree: 'B.E. in Computer Science and Technology',
        logo: '/cover/experience/BJTU-logo.svg',
    },
]

export default function ExperienceList() {
    return (
        <div className="rounded-lg mb-6 p-6 ring-1 ring-slate-900/5 shadow-lg">
            <SectionHeader title="* Experience" icon={sectionIcon('school.svg')} />
            <hr className="mt-3 mb-2"></hr>

            <div className="space-y-3">
                {experiences.map((item) => (
                    <div className="flex items-center gap-3" key={item.school}>
                        <div className="shrink-0">
                            <Image
                                src={item.logo}
                                width={52}
                                height={52}
                                alt={item.school + ' logo'}
                                className="rounded-full object-contain"
                            />
                        </div>
                        <div className="leading-snug">
                            <div className="text-sm md:text-base font-medium mb-1 text-slate-800">{item.school}</div>
                            <div className="text-xs text-slate-700">{item.period}</div>
                            <div className="text-xs italic text-slate-700">{item.degree}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
