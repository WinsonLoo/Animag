import Navbar, { siteTitle, searchName } from '../../components/navbar'
import Head from 'next/head'

export default function SearchInfo(){
    return(
        <div>
        <Head>
            <title>{siteTitle}/about</title>
        </Head>
            <Navbar search/>
            <h1>Search result of {searchName}</h1>

        </div>
    );
}