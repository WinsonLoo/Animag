import Navbar, { siteTitle } from '../../components/navbar'
import Head from 'next/head'

export default function AnimeOnly() {
    return (
        <div>
            <Head>
                <title>{siteTitle}/contact</title>
            </Head>
            <Navbar contact />
            <div>
                <div className="item-center rounded overflow-hidden shadow-lg pl-10 my-2 w-50 h-50">
                        <div className="px-6 py-4">
                            <div className="font-bold text-5xl mb-2">This Section is still in developtment!!!</div>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block rounded-full px-3 py-10"></span>
                        </div>
                </div>
            </div>
        </div>
    );
}