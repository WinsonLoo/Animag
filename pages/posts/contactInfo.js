import Navbar,{siteTitle} from '../../components/navbar'
import Head from 'next/head'

export default function ContactInfo (){
    return(
        <div>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Navbar/>
            <div className="shadow-2xl">
                <h2>Contact Info:weixiong8489@gmail.com</h2>
            </div>
        </div>
    );
}