import Head from 'next/head'
import Link from 'next/link'
import { ApolloProvider, useQuery } from '@apollo/client';
import Navbar, { siteTitle } from '../components/navbar.js'
import Anime,{client, Manga} from './contents.js'


export default function Home() {

return (
  <ApolloProvider client={client}>
    <div>
      <Navbar home />
      <Head>
        <link rel="icon" href="/animag.jpg" />
        <title>{siteTitle}</title>
      </Head>

        <div className="container mx-auto">
        </div>        
        <div className="container mx-auto p-8">
        <div className="flex flex-row flex-wrap -mx-2">
        <Anime/>
        <Manga/>
        </div>
        </div>
    </div>
  </ApolloProvider>
  );
}

