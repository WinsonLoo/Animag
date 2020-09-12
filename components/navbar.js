import Head from 'next/head'
import Link from 'next/link'
import {useState} from 'react'

export const siteTitle = 'Animag'
export var searchName = ''

export default function Navbar({home,contact,about,search, pagination}) {
    const [input,setInput] = useState("")

    function getSearch(){
        searchName = input
    }

    return (
        <div>
            <Head>
                <meta name="og:title" content={siteTitle} />
            </Head>
            {/* nav bar */}
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-4">
                <div className="flex items-center flex-shrink-0 text-white mr-10">
                {home ? (
                    <>
                        <Link href="/">
                            <a className = "fill-current h-10 w-10 mr-10"><img src = "am.jpg" alt ="Image not Found"/></a>
                        </Link>

                        <span className="font-semibold text-xl tracking-tight pr-10">
                            <Link href ="/">
                            <a>Home</a>
                            </Link>
                        </span>

                        <span className="font-semibold text-xl tracking-tight pr-10">
                            <Link href ="/post/anime">
                             <a>Anime</a>
                            </Link>
                        </span>

                        <span className="font-semibold text-xl tracking-tight pr-10">
                            <Link href ="/post/manga">
                              <a>Manga</a>
                            </Link>
                        </span>

                        <span className="font-semibold text-xl tracking-tight pr-10">
                            <Link href ="/post/about">
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
                        <Link href="/">
                            <a className = "fill-current h-10 w-10 mr-10"><img src = "/am.jpg" alt ="Image not Found"/></a>
                        </Link>

                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href ="/">
                        <a>Home</a>
                        </Link>

                        </span>
                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href ={pagination?"../post/anime":"../post/anime"}>
                        <a>Anime</a>
                        </Link>

                        </span>
                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href ={pagination?"../post/manga":"../post/manga"}>
                        <a>Manga</a>
                        </Link>

                        </span>
                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href = {pagination?"../post/about":"../post/about"}>
                        <a>About</a>
                        </Link>

                        </span>
                        <span className="font-semibold text-xl tracking-tight pr-10">
                        <Link href = {pagination?"../post/contactInfo":"../post/contactInfo"}>
                        <a>Contact</a>
                        </Link>
                        </span>
                    </>
                    )
                }
                </div>
                {/*search */}
                <div className="justify-end pr-20">
                    <input 
                        type="search"
                        placeholder="Search title here..."
                        value = {input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className = "ml-5 bg-transparent hover:bg-white-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded" onClick={getSearch}>
                         <Link href= {home?'/post/search':'/search'}>
                              <a>Search</a>
                        </Link>
                    </button>
                </div>
            </nav>
            <style jsx global>{`
            html,
            body {
                background-color: #fffaf0;
            }
          `}</style>
        </div>
    )
}