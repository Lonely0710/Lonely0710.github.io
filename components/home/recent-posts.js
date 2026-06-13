import Link from 'next/link'
import PaperCard from '../posts/paper-card'
import ProjectCard from '../posts/project-card'
import { SectionHeader } from '../ui'

export default function RecentPosts({ type, posts, maxnum }) {
    let num = 0 // idx of a post
    const title = type === 'paper' ? '* Publications' : '* Projects'
    const icon = type === 'paper' ? '/icon/arxiv-icon.svg' : '/icon/project-card-icon.svg'

    var BlockDict = {
        "paper": PaperCard,
        "project": ProjectCard,
    }
    let BlockType = BlockDict[type]

    // generate recent post body
    const recent_post_body = posts.map((post) => {
        num = num + 1

        if (num <= maxnum) {
            return (
                <div className="hover:bg-slate-100 mt-2" key={post.id}>
                    <BlockType post={post} />
                </div>
            )
        }
    })

    // generate read more
    let readmore = (<></>)

    if (num > maxnum) {
        readmore = (
            <>
                <hr className="mt-2 mb-2"></hr>
                <Link href={"/" + type}>
                    <div className="text-sm italic hover:bg-slate-100">... (read more)
                    </div>
                </Link>
            </>
        )
    }

    return (
        <div className="rounded-lg mb-6 p-6 ring-1 ring-slate-900/5 shadow-lg">
            <Link href={"/" + type} className="section-header-link">
                <SectionHeader title={title} icon={icon} preserveIconColor={type === 'paper'} />
            </Link>
            <hr className="mt-3 mb-2"></hr>
            <div>
                {recent_post_body}
                {readmore}
            </div>
        </div>
    )
}
