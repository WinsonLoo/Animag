import Navbar, { siteTitle } from '../../components/navbar'
import Head from 'next/head'

export default function ContactInfo() {
    return (
        <div>
            <Head>
                <title>{siteTitle}/about</title>
            </Head>
            <Navbar about/>
            <div>
                <div className="item-center rounded overflow-hidden shadow-lg pl-10 my-2 w-50 h-50">
                        <div className="px-6 py-4">
                            <div className="font-bold text-5xl mb-2">About</div>
                            <div className="text-grey-darker text-2xl">
                                <p>
                                    This page is created as a test project for lavaX but I will keep developt it in the future.
                                </p>
                                <br/>
                                <p>Built with:</p>
                                <ul className = "pl-5 text-xl italic"> 
                                    <li>- Next.js</li>
                                    <li>- tailwind css</li>
                                    <li>- graphQl</li>
                                    <li>- Anilist api</li>
                                    <li>- Apollo client</li>
                                </ul>
                            </div>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block rounded-full px-3 py-10"></span>
                        </div>
                </div>
            </div>
        </div>
    );
}