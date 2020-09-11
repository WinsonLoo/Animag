import Head from 'next/head'
import Link from 'next/link'
import { ApolloProvider, useQuery } from '@apollo/client';
import Navbar, { siteTitle } from '../components/navbar.js'
import Anime,{client} from './contents.js'


export default function Home() {

return (
  <ApolloProvider client={client}>
    <div>
      <Navbar home />
      <Head>
        <link rel="icon" href="/animag.jpg" />
        <title>{siteTitle}</title>
      </Head>
        <div className="container mx-auto p-8">
          <div className="flex flex-row flex-wrap">
            <Anime/>
          </div>
        </div>
    </div>
  </ApolloProvider>
  );
}

