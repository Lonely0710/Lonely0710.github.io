import Image from 'next/image'

export default function ProfileBlock() {
    return (
        <div className="group/profile">
            <div className="profile-name mx-auto h-7 whitespace-nowrap text-slate-700 font-semibold text-xl leading-tight md:h-9 md:text-2xl">
                <span className="inline group-hover/profile:hidden group-active/profile:hidden">LONGLI</span>
                <span className="hidden text-rose-700 group-hover/profile:inline group-active/profile:inline">LONELY</span>
                <span> YANG</span>
            </div>
            <div className="relative mx-auto my-3 h-24 w-24 cursor-pointer select-none md:my-5 md:h-[150px] md:w-[150px]">
                <Image priority src="/profile/avatar.jpg" className="absolute inset-0 h-full w-full rounded-full object-cover transition-opacity duration-150 group-hover/profile:opacity-0 group-active/profile:opacity-0" height={150} width={150} alt="" />
                <Image priority src="/profile/lonely.png" className="absolute inset-0 h-full w-full rounded-full object-cover opacity-0 transition-opacity duration-150 group-hover/profile:opacity-100 group-active/profile:opacity-100" height={150} width={150} alt="" />
            </div>
        </div>
    )
}
