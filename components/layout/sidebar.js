import Link from 'next/link'
import Image from 'next/image'
import ProfileBlock from './profile-block'
import IconStack from '../ui/icon-stack'

const socialLinks = [
    ['google-scholar.svg', 'https://scholar.google.com', 20, 'icon-unify-color'],
    ['cv', '...', 24, 'icon-unify-color'],
    ['github.svg', 'https://github.com/lonely0710', 20, 'icon-unify-color'],
    // Examples for future links:
    // ['huggingface.svg', 'https://huggingface.co/your-name', 22, 'icon-unify-color'],
    // ['linkedin.svg', 'https://www.linkedin.com/in/your-name', 18, 'icon-unify-color'],
    // ['zhihu.svg', 'https://www.zhihu.com/people/your-name', 18, 'icon-unify-color'],
    // ['rednote.svg', 'https://www.xiaohongshu.com/user/profile/your-id', 22, 'icon-unify-color'],
    // ['bilibili.svg', 'https://space.bilibili.com/your-id', 20, 'icon-unify-color'],
    // ['instagram.svg', 'https://www.instagram.com/your-name', 20, 'icon-unify-color'],
    // ['x.svg', 'https://x.com/your-name', 20, 'icon-unify-color'],
]

const navItems = [
    { title: 'Home', url: '/', image: '/icon/home-icon.svg', iconClass: 'h-4 w-4 md:h-[18px] md:w-[18px]' },
    { title: 'Papers', url: '/paper', image: '/icon/arxiv-icon.svg', iconClass: 'h-[18px] w-[18px] md:h-5 md:w-5' },
    { title: 'Projects', url: '/project', image: '/icon/project-icon.svg', iconClass: 'h-[18px] w-[18px] md:h-5 md:w-5' },
    { title: 'Blogs', url: 'https://blog.ylonely.cn', image: '/icon/blog-icon.svg', iconClass: 'h-4 w-4 md:h-[18px] md:w-[18px]', hoverIcon: '/icon/right-arrow-icon.svg' },
]

function SocialLinks() {
    return (
        <IconStack
            divclass="flex mx-auto w-fit items-center gap-4 md:gap-6"
            imgclass="p-0"
            size="22"
            icon_links={socialLinks}
        />
    )
}

function SidebarNav() {
    return (
        <div className="mx-auto mb-5 grid w-full max-w-md grid-cols-4 gap-1 px-2 pt-4 sm:gap-2 md:mb-0 md:block md:w-[150px] md:px-0 md:translate-x-5 md:pt-0">
            {navItems.map(({ title, url, image, iconClass, hoverIcon }) => (
                <div className="min-w-0 md:my-5 md:w-[150px]" key={title + url}>
                    <Link className="group/nav-link flex h-9 min-w-0 items-center justify-center gap-1 rounded-md px-0.5 py-1 font-serif text-slate-500 hover:bg-slate-50 hover:text-slate-700 md:h-auto md:justify-start md:gap-2 md:p-0 md:text-slate-500 md:hover:bg-transparent md:hover:text-slate-700" href={url}>
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                            <Image priority src={image} height={20} width={20} className={`${iconClass} object-contain`} alt="" />
                        </span>
                        <span className="min-w-0 whitespace-nowrap text-sm font-medium leading-none md:text-base md:leading-normal">{title}</span>
                        {hoverIcon ? (
                            <span
                                className="hidden h-3.5 w-3.5 shrink-0 bg-slate-500 opacity-0 transition-opacity duration-150 group-hover/nav-link:opacity-100 group-focus-visible/nav-link:opacity-100 md:inline-block"
                                style={{
                                    WebkitMask: `url(${hoverIcon}) center / contain no-repeat`,
                                    mask: `url(${hoverIcon}) center / contain no-repeat`,
                                }}
                                aria-hidden="true"
                            />
                        ) : null}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default function Sidebar() {
    return (
        <div className="mx-auto w-fit">
            <ProfileBlock />
            <SocialLinks />
            <SidebarNav />
        </div>
    )
}
