import '@/styles/globals.css'
import 'katex/dist/katex.min.css';
import type { AppProps } from 'next/app'
import { Crimson_Pro } from 'next/font/google'

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={crimsonPro.className}>
      <Component {...pageProps} />
    </main>
  )
}
