import '@/styles/globals.css'
import 'katex/dist/katex.min.css';
import type { AppProps } from 'next/app'
import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-eb-garamond',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${ebGaramond.variable} ${ebGaramond.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
