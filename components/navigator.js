import Link from 'next/link'
import Image from 'next/image'
import IconStack from './icon-stack'
import { BookOpenText, Hammer, House, Scroll } from '@phosphor-icons/react'

export default function SideBar({ children }) {
    return (
        <div className="mx-auto w-fit">
            {/* name and image */}
            <div className="group/profile">
                <div className="mx-auto h-9 whitespace-nowrap font-mono text-slate-700 font-semibold text-2xl leading-tight">
                    <span className="inline group-hover/profile:hidden group-active/profile:hidden">LONGLI</span>
                    <span className="hidden text-rose-700 group-hover/profile:inline group-active/profile:inline">LONELY</span>
                    <span> YANG</span>
                </div>
                <div className="relative mx-auto my-5 h-[150px] w-[150px] cursor-pointer select-none">
                    <Image priority src="/profile/avatar.jpg" className="absolute inset-0 h-full w-full rounded-full object-cover transition-opacity duration-150 group-hover/profile:opacity-0 group-active/profile:opacity-0" height={150} width={150} alt="" />
                    <Image priority src="/profile/lonely.png" className="absolute inset-0 h-full w-full rounded-full object-cover opacity-0 transition-opacity duration-150 group-hover/profile:opacity-100 group-active/profile:opacity-100" height={150} width={150} alt="" />
                </div>
            </div>

            {/* email & links */}
            <IconStack divclass="flex mx-auto w-fit items-center gap-6" imgclass="p-0" size="22" icon_links={[
                ['google-scholar.svg', 'https://scholar.google.com', 20, 'icon-unify-color'],             
                ['cv', '...', 24, 'icon-unify-color'],
                ['github.svg', 'https://github.com/lonely0710', 20, 'icon-unify-color'],
                // ['hugging-face', '...'],
                // ['medium', '...'],
                // ['x', '...'],
                // ['rednote.svg', 'https://www.xiaohongshu.com/user/profile/62af5930000000001b0248a5', 22, 'icon-unify-color'],
                // ['linkedin.svg', 'https://www.linkedin.com', 18],
                // ['zhihu.svg', 'https://www.zhihu.com', 18],
            ]} />

            {/* navigator */}
            <div className="mx-auto mb-8 grid w-fit grid-cols-4 gap-5 pt-5 md:mb-0 md:block md:w-[150px] md:translate-x-5 md:pt-0">
                {[
                    { title: 'Home', url: '/', icon: House },
                    { title: 'Papers', url: '/paper', icon: Scroll },
                    { title: 'Projects', url: '/project', icon: Hammer },
                    { title: 'Blogs', url: 'https://blog.ylonely.cn', icon: BookOpenText },
                ].map(({ title, url, icon: Icon }) => (
                    <div className="md:my-5 md:w-[150px]" key={title + url}>
                        <Link className="flex items-center justify-center gap-1.5 rounded-md px-1 py-1.5 font-serif text-slate-500 hover:bg-slate-50 hover:text-slate-700 md:justify-start md:gap-2 md:p-0 md:text-slate-500 md:hover:bg-transparent md:hover:text-slate-700" href={url}>
                            <span className="inline-flex h-5 w-5 items-center justify-center shrink-0">
                                <Icon size={21} weight="bold" className="md:h-5 md:w-5" />
                            </span>
                            <span className="whitespace-nowrap text-base leading-none md:text-base md:leading-normal">{title}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
