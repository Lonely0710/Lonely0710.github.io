import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/layout'
import { ExperienceList, RecentPosts } from '../components/home'
import { ContactPill } from '../components/ui'
import { getSortedPostsData } from '../utils/post-data'

export default function Home({ allpaper, allproject }) {
    return (
        <>
            <Head>
                <title>Longli Yang</title>
            </Head>
            <SiteLayout>
                <h2>Hello 🦔</h2>
                <p>Welcome to my site!</p>
                <p>
                    I will receive my Bachelor&apos;s degree from <Link href="https://cs.bjtu.edu.cn/">Beijing Jiaotong University</Link> and am currently a graduate student at <Link href="http://hias.ucas.ac.cn/znkxyjs/index.htm">Hangzhou Institute for Advanced Study</Link>.
                </p>
                <p className="contact-line">
                    I am thrilled with exploring new ideas 💡 and hopefully my effort can contribute to our community 🌍.
                </p>
                <p className="contact-chat">
                    I am always looking to learn from others and exchange ideas. If any of this resonates with you, I&apos;d appreciate a chat via{' '}
                    <ContactPill value="lingsou43@gmail.com" label="lingsou@gmail.com" />{' '}
                    or{' '}
                    <ContactPill type="wechat" value="yll205923907" />
                    .
                </p>

                <br></br>
                <ExperienceList />
                <RecentPosts type='paper' posts={allpaper} maxnum={3} />
                <RecentPosts type='project' posts={allproject} maxnum={3} />
            </SiteLayout>
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
