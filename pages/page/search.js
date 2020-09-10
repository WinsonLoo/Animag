import Navbar, { siteTitle, searchName } from '../../components/navbar'
import Head from 'next/head'
import Anime,{client} from "../contents"
import { ApolloProvider } from '@apollo/client';

export default function SearchInfo(){
    return(
        <div>
            <Head>
                <title>{siteTitle}/about</title>
            </Head>
                <Navbar search/>
            <div>
                <h1>Search Result of {searchName}:</h1>
            </div>
            <ApolloProvider client={client}>
                <Anime/>
            </ApolloProvider>
        </div>
    );
}