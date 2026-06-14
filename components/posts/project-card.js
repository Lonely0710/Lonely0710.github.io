import Link from 'next/link'
import Image from 'next/image'
import { navIcon, socialIcon } from '../ui/icon-paths'
import { projectBrandIcons, projectIconGroups, projectIconGroupsById } from './project-icons'

const hoverLinkIcon = navIcon('arrow-right.svg')

function TechIcon({ iconKey, compact = false }) {
    const icon = projectBrandIcons[iconKey]
    if (!icon) return null
    const iconSize = compact ? 14 : 16

    return (
        <span
            title={icon.label}
            aria-label={icon.label}
            className="inline-flex shrink-0 items-center justify-center"
            style={{ height: iconSize, width: iconSize }}
        >
            <Image
                src={icon.src}
                height={iconSize}
                width={iconSize}
                style={{ height: iconSize, width: iconSize }}
                className="object-contain"
                alt=""
            />
        </span>
    )
}

function TechGroup({ label, Icon, keys, techSet, compact = false }) {
    const visibleKeys = keys.filter((key) => techSet.has(key))
    if (visibleKeys.length === 0) return null

    return (
        <div className="flex min-w-0 items-center gap-1.5">
            <span className={`profile-name inline-flex items-center gap-1 rounded-full bg-slate-100/80 px-1.5 py-0.5 ${compact ? 'text-[0.55rem]' : 'text-[0.58rem]'} leading-none text-slate-500`}>
                <Icon className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
                {label}
            </span>
            <span className="inline-flex shrink-0 items-center gap-1">
                {visibleKeys.map((key) => (
                    <TechIcon iconKey={key} compact={compact} key={key} />
                ))}
            </span>
        </div>
    )
}

function PlatformBlock({ group, techSet }) {
    const visibleKeys = group.keys.filter((key) => techSet.has(key))
    if (visibleKeys.length === 0) return null

    return (
        <div className="mt-2 flex max-w-full flex-col items-center gap-1 overflow-hidden">
            <span className="profile-name inline-flex items-center gap-1 rounded-full bg-slate-100/80 px-1.5 py-0.5 text-[0.55rem] leading-none text-slate-500">
                <group.Icon className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
                {group.label}
            </span>
            <span className="inline-flex items-center justify-center gap-1.5">
                {visibleKeys.map((key) => (
                    <TechIcon iconKey={key} compact key={key} />
                ))}
            </span>
        </div>
    )
}

export default function ProjectCard ({post, show_abstract=false, divclass="flex flex-col md:flex-row items-center", titleclass="font-serif font-semibold italic text-sm mb-1 text-slate-500", abstract_class="text-xs md:text-sm text-slate-700 line-clamp-5", dateclass="text-xs text-slate-700", imgsize=120}) {
    const coverpath = '/cover/project/' + post.id + '.png'
    const post_link = post.link?.github
    const tech = post.tech || []
    const techSet = new Set(tech)
    const builtGroup = projectIconGroupsById.built
    const platformGroup = projectIconGroupsById.platforms
    const stackGroup = projectIconGroupsById.stack
    const githubLink = post_link ? (
        <Link href={post_link} className="group/github inline-flex items-center gap-1" aria-label={`${post.title} GitHub repository`}>
            <Image
                src={socialIcon('github.svg')}
                height={16}
                width={16}
                className="h-4 w-4 object-contain"
                alt=""
            />
            <span
                className="h-3.5 w-3.5 bg-slate-500 opacity-0 transition-opacity duration-150 group-hover/github:opacity-100 group-focus-visible/github:opacity-100"
                style={{
                    WebkitMask: `url(${hoverLinkIcon}) center / contain no-repeat`,
                    mask: `url(${hoverLinkIcon}) center / contain no-repeat`,
                }}
                aria-hidden="true"
            />
        </Link>
    ) : null

    return (
        <div className="min-w-0">
            <div className="flex min-w-0 items-start lg:hidden">
                <div className="mr-3 flex w-[88px] shrink-0 flex-col items-center sm:w-[96px]">
                    <Link href={post_link} className="block">
                        <Image src={coverpath} height={imgsize} width={imgsize} className="h-16 w-16 object-contain sm:h-20 sm:w-20" alt=""/>
                    </Link>
                    {platformGroup ? <PlatformBlock group={platformGroup} techSet={techSet} /> : null}
                </div>
                <div className="min-w-0 flex-1">
                    <Link href={post_link}>
                        <div className={`${titleclass} break-words`}>{post.title}</div>
                    </Link>
                    <div className={`${dateclass} inline-flex items-center gap-1.5`}>
                        <span>{post.date}</span>
                        {githubLink}
                    </div>
                    <Link href={post_link}>
                        <div className={`${dateclass} break-words`}>{post.description}</div>
                    </Link>
                    <div className="mt-2 flex min-w-0 flex-wrap items-start gap-x-3 gap-y-1.5">
                        {builtGroup ? <TechGroup {...builtGroup} techSet={techSet} compact /> : null}
                        {stackGroup ? <TechGroup {...stackGroup} techSet={techSet} compact /> : null}
                    </div>
                </div>
            </div>

            <div className="hidden lg:block">
                <div className={divclass}>
                    <Link href={post_link}>
                        <Image src={coverpath} height={imgsize} width={imgsize} className="mx-auto basis-1/5" alt=""/>
                    </Link>
                    <div className="md:ml-2 basis-4/5">
                        <Link href={post_link}>
                            <div className={titleclass}>{post.title}</div>
                        </Link>
                        <div className={`${dateclass} inline-flex items-center gap-1.5`}>
                            <span>{post.date}</span>
                            {githubLink}
                        </div>
                        <Link href={post_link}>
                            <div className={dateclass}>{post.description}</div>
                        </Link>
                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                            {projectIconGroups.map(({ label, Icon, keys }) => {
                                return <TechGroup label={label} Icon={Icon} keys={keys} techSet={techSet} key={label} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
