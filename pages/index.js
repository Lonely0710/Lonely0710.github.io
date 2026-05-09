import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import RecentPost from '../components/recent-post'
import ExperienceList from '../components/experience-list'
import { getSortedPostsData } from '../utils/post-data'

export default function Home({ allpaper, allproject }) {
    return (
        <>
            <Head>
                <title>Longli Yang | Home</title>
            </Head>
            <Layout>
                <h2>Hello 👋</h2>
                <p>Welcome to my site!</p>
                <p>
                    I will receive my Bachelor&apos;s degree from <Link href="https://cs.bjtu.edu.cn/">Beijing Jiaotong University</Link> and am currently a graduate student at <Link href="http://hias.ucas.ac.cn/znkxyjs/index.htm">Hangzhou Institute for Advanced Study</Link>.
                </p>
                <p className="contact-line">
                    I am thrilled with exploring new ideas 💡 and hopefully my effort can contribute to our community 🌍.
                </p>
                <p className="contact-chat">
                    I am always looking to learn from others and exchange ideas. If any of this resonates with you, I&apos;d appreciate a chat via{' '}
                    <a className="pill pill-mail" href="mailto:lingsou43@gmail.com">
                        <span className="pill-inner">
                            <Image className="pill-icon" src="/icon/mail.svg" alt="mail" width={20} height={20} />
                            lingsou@gmail.com
                        </span>
                    </a>{' '}
                    or{' '}
                    <span className="pill pill-wechat">
                        <span className="pill-inner">
                            <Image className="pill-icon" src="/icon/wechat.svg" alt="wechat" width={20} height={20} />
                            yll205923907
                        </span>
                    </span>
                    .
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
