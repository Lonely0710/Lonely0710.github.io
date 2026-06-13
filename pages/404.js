import Head from 'next/head'
import Image from 'next/image'

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 | Page Not Found</title>
            </Head>
            <main className="not-found-page">
                <section className="not-found-panel" aria-label="Page not found">
                    <div className="not-found-code">404</div>
                    <div className="not-found-divider" aria-hidden="true" />
                    <div className="not-found-content">
                        <Image
                            priority
                            src="/icon/404.svg"
                            width={260}
                            height={110}
                            alt=""
                            className="not-found-illustration"
                        />
                        <p className="not-found-message">#This page could not be found.</p>
                    </div>
                </section>
            </main>
        </>
    )
}
