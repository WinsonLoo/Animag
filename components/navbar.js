import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = 'Animag'

export default function Navbar({home}) {
    return (
        <div>
            <Head>
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
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-4">
                <div className="flex items-center flex-shrink-0 text-white mr-10">
                {home ? (
                    <>
                        <Link href="../index">
                            <a className = "fill-current h-10 w-10 mr-10"><img src = "am.jpg" alt ="Image not Found"/></a>
                        </Link>

                        <span className="font-semibold text-xl tracking-tight pr-10">
                            <Link href ="/">
                            <a>Home</a>
                            </Link>
                        </span>

                        <span className="font-semibold text-xl tracking-tight pr-10">
                            <Link href ="/">
                            <a>Anime</a>
                            </Link>
                        </span>

                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href ="/">
                        <a>Manga</a>
                        </Link>

                        </span>
                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href ="/">
                        <a>About</a>
                        </Link>

                        </span>
                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href ="/post/contactInfo">
                        <a>Contact</a>
                        </Link>
                        </span>
                    </>
                    ):(
                    <>
                        <Link href="../index">
                            <a className = "fill-current h-10 w-10 mr-10"><img src = "am.jpg" alt ="Image not Found"/></a>
                        </Link>

                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href ="/">
                        <a>Home</a>
                        </Link>

                        </span>
                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href ="/">
                        <a>Anime</a>
                        </Link>

                        </span>
                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href ="/">
                        <a>Manga</a>
                        </Link>

                        </span>
                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href ="/">
                        <a>About</a>
                        </Link>

                        </span>
                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href ="/post/contactInfo">
                        <a>Contact</a>
                        </Link>
                        </span>
                    </>
                    )
                }
                </div>
                {/*Temporay search bar */}
                <div className="justify-end pr-20">
                    <input type="search" placeholder="Search title here..."/>
                        {/*<svg className = "h-6 w-8 text-white"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>*/}          
  
                </div>
            </nav>
        </div>

    )
}