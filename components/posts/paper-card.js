import Link from 'next/link'
import Image from 'next/image'

function AuthorLine({ author }) {
    const authors = author.split(', ')

    return (
        <>
            {authors.map((name, index) => (
                <span key={name}>
                    {index > 0 ? ', ' : ''}
                    {name === 'Longli Yang' ? (
                        <span className="inline-flex items-center gap-0.5 rounded-full border border-rose-700/25 bg-rose-50/70 px-1.5 py-px text-[0.64rem] font-semibold leading-none text-rose-800 md:text-[0.7rem]">
                            {name}
                            <span className="nerd-font text-[1rem] leading-none text-rose-700">{'\ueb08'}</span>
                        </span>
                    ) : name}
                </span>
            ))}
        </>
    )
}

export default function PaperCard ({post, show_abstract=false, show_doi=false, divclass="flex flex-col items-center md:flex-row", titleclass="font-serif font-semibold italic text-sm mb-2 md:mb-1 text-slate-500", abstract_class="text-xs md:text-sm text-slate-700 line-clamp-5", dateclass="text-xs text-slate-700", imgsize=120}) {
    const coverpath = post.coverpath
    const arxiv_id = post.page?.match(/arxiv\.org\/abs\/(.+)$/i)?.[1]
    
    const abstract = (show_abstract) ? (
        <>
        <hr className="mt-2 mb-2 text-slate-700"></hr>
        <p className={abstract_class}>{post.abstract}</p>
        </>
    ) : (
        <></>
    )

    const doi = (show_doi) ? (
        <>
        <hr className="mt-2 mb-2 text-slate-700"></hr>
        <p className={abstract_class}>DOI: {post.doi}</p>
        </>
    ) : (
        <></>
    )

    const post_link = (post.page) ? (post.page) : (post.doi)

    return (
        <Link href={post_link} className="block">
            <div className={divclass}>
                <div className="mb-3 flex w-full justify-center md:mb-0 md:block md:w-auto md:basis-1/5">
                <Image src={coverpath} height={imgsize} width={imgsize} className="h-28 w-44 object-contain md:h-auto md:w-auto md:mx-auto" alt=""/>
                </div>
                <div className="w-full md:ml-3 md:basis-4/5">
                    <div className={titleclass}>{post.title}</div>
                    <div className={dateclass}><AuthorLine author={post.author} /></div>
                    <div className={`${dateclass} flex flex-wrap items-center justify-between gap-x-3 gap-y-1`}>
                        <span>{post.date}</span>
                        {arxiv_id ? (
                            <span className="rounded-full border border-slate-300/80 bg-slate-50/80 px-1.5 py-px font-serif text-[0.64rem] leading-none italic text-slate-700 shadow-sm md:text-[0.7rem]">
                                arXiv:{arxiv_id}
                            </span>
                        ) : null}
                    </div>
                </div>  
            </div>
            {abstract}
            {doi}
        </Link>
    )
}
