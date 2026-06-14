import Head from 'next/head'
import SiteLayout from '../../components/layout'
import { ProjectCard } from '../../components/posts'
import { getAllPostIds, getPostData } from '../../utils/post-data'

export default function ProjectPage({ post }) {
    if (!post) {
        return null
    }

    const update = (post.update != null) ? (
        <div className="italic mt-5 text-right">
            Lastly updated: <span>{post["update"]}</span>
        </div>
    ) : (
        <></>
    )

    return (
        <SiteLayout>
            <Head>
                <title>{post.title}</title>
                <meta property="twitter:card" content="summary"/>
                <meta property="twitter:site" content="@liu_qi_long"/>
                <meta property="twitter:title" content={post.title}/>
                <meta property="twitter:image" content={`https://me.ylonely.cn${post.coverpath}`}/>
            </Head>
            <div>
                <ProjectCard post={post} titleclass="font-serif text-2xl md:text-3xl font-semibold italic text-slate-500" dateclass="font-mono text-sm" imgsize="150"/>
                <hr className="mt-5"></hr>
                <div dangerouslySetInnerHTML={{ __html: post.content }}/>
            </div>
            {update}
        </SiteLayout>
    )
}

export async function getStaticPaths() {
  const paths = getAllPostIds('contents/project')
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
    const post = await getPostData(params.id, 'contents/project')
    return {
        props: { post }
  }
}
