import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const siteTitle = 'Animag'

export default function Navbar() {
    return (
        <div>
            <Head>
                <link rel="icon" href="/animag.jpg" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            {/* nav bar */}
            <nav className = "flex-none items-center justify-between flex-wrap bg-gray-800 p-8">
            
            </nav>
        </div>

    )
}