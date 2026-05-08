import Link from 'next/link'
import Image from 'next/image'
import IconStack from './icon-stack'
import React, { useState } from 'react'
import { Home, ScrollText, Hammer, BookOpen } from 'lucide-react'

export default function SideBar({ children }) {
    const [name, setName] = useState('LONGLI')
    const [imglink, setImgLink] = useState('/profile/lonely.jpg')

    return (
        <div className="mx-auto w-fit">
            {/* name and image */}
            <div className="group"
                onMouseEnter={() => {
                    setName('LONELY')
                    setImgLink('/profile/knpob.png')
                }}
                onMouseLeave={() => {
                    setName('LONGLI')
                    setImgLink('/profile/lonely.jpg')
                }}>
                <div className="mx-auto h-[72px] font-mono text-slate-700 font-semibold text-2xl leading-tight">
                    <div className="h-9 text-center group-hover:text-rose-700">{name}</div>
                    <div className="h-9 text-center">YANG</div>
                </div>
                <div className="mx-auto my-5 h-[150px] w-[150px]">
                    <Image priority src={imglink} className="h-full w-full rounded-full object-cover" height={150} width={150} alt="" />
                </div>
            </div>

            {/* email & links */}
            <IconStack divclass="flex mx-auto w-fit" imgclass="p-1" size="20" icon_links={[
                // ['cv', '...'],
                ['google-scholar.svg', 'https://scholar.google.com', 18, 'translate-y-0.5'],
                ['github.svg', 'https://github.com/lonely0710'],
                // ['hugging-face', '...'],
                // ['medium', '...'],
                // ['x', '...'],
                ['rednote.svg', 'https://www.xiaohongshu.com/user/profile/62af5930000000001b0248a5'],
                ['linkedin.svg', 'https://www.linkedin.com', 18],
                ['zhihu.svg', 'https://www.zhihu.com', 18],
            ]} />
            <Link className="text-s hyphens-none" href="lingsou43@gmail.com">lingsou43@gmail.com</Link>

            {/* navigator */}
            <div className="mx-auto mb-8 grid w-fit translate-x-4 grid-cols-2 gap-x-16 gap-y-5 pt-5 md:mb-0 md:block md:w-[150px] md:translate-x-5 md:pt-0">
                {[
                    { title: 'Home', url: '/', icon: Home },
                    { title: 'Papers', url: '/paper', icon: ScrollText },
                    { title: 'Projects', url: '/project', icon: Hammer },
                    { title: 'Blogs', url: 'https://blog.ylonely.cn', icon: BookOpen },
                ].map(({ title, url, icon: Icon }) => (
                    <div className="w-[110px] md:my-5 md:w-[150px]" key={title + url}>
                        <Link className="text-slate-800 text-lg flex items-center gap-2" href={url}>
                            <span className="inline-flex h-5 w-5 items-center justify-center shrink-0">
                                <Icon size={20} strokeWidth={2.2} />
                            </span>
                            <span>{title}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
