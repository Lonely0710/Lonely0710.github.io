import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import RecentPost from '../components/recent-post'
import ExperienceList from '../components/experience-list'
import { getSortedPostsData } from '../utils/post-data'

export default function Home({ allpaper, allproject }) {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Layout>
                <h2>Hello 👋</h2>
                <p>Welcome to my blog site!</p>
                <p>
                    I will receive my Bachelor&apos;s degree from <Link href="https://cs.bjtu.edu.cn/">Beijing Jiaotong University</Link> and am currently a graduate student at <Link href="http://hias.ucas.ac.cn/znkxyjs/index.htm">Hangzhou Institute for Advanced Study</Link>.
                </p>
                <p>
                    I am thrilled with exploring new ideas 💡 and hopefully my effort can contribute to our community 🌍
                </p>

                <br></br>
                <ExperienceList />
                <RecentPost type='paper' posts={allpaper} maxnum={3} />
                <RecentPost type='project' posts={allproject} maxnum={3} />
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allpaper = getSortedPostsData('contents/paper')
    const allproject = getSortedPostsData('contents/project')
    return {
        props: {
            allpaper,
            allproject,
        }
    }
}
