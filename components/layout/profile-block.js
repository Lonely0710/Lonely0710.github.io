import Image from 'next/image'
import { useState } from 'react'

export default function ProfileBlock() {
    const [isHovered, setIsHovered] = useState(false)
    const [isToggled, setIsToggled] = useState(false)
    const showLonely = isHovered || isToggled

    const supportsHover = () => {
        return typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
    }

    const handleMouseEnter = () => {
        if (supportsHover()) setIsHovered(true)
    }

    const handleMouseLeave = () => {
        if (supportsHover()) setIsHovered(false)
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="profile-name mx-auto h-7 whitespace-nowrap text-slate-700 font-semibold text-xl leading-tight md:h-9 md:text-2xl">
                <span className={showLonely ? 'hidden' : 'inline'}>LONGLI</span>
                <span className={showLonely ? 'inline text-rose-700' : 'hidden text-rose-700'}>LONELY</span>
                <span> YANG</span>
            </div>
            <button
                type="button"
                className="relative mx-auto my-3 block h-24 w-24 cursor-pointer select-none rounded-full md:my-5 md:h-[150px] md:w-[150px]"
                onClick={() => setIsToggled((current) => !current)}
                aria-label={showLonely ? 'Show LONGLI avatar' : 'Show LONELY avatar'}
            >
                <Image priority src="/profile/avatar.jpg" className={`absolute inset-0 h-full w-full rounded-full object-cover transition-opacity duration-150 ${showLonely ? 'opacity-0' : 'opacity-100'}`} height={150} width={150} alt="" />
                <Image priority src="/profile/lonely.png" className={`absolute inset-0 h-full w-full rounded-full object-cover transition-opacity duration-150 ${showLonely ? 'opacity-100' : 'opacity-0'}`} height={150} width={150} alt="" />
            </button>
        </div>
    )
}
