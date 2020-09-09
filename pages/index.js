import Head from 'next/head'
import Link from 'next/link'
import { ApolloProvider } from '@apollo/client';
import Tester,{client} from '../lib/post.js'
import Navbar,{siteTitle} from '../components/navbar.js'
import Anime from './contents.js'

export default function Home() {
  return (
    <div>
      <Navbar home/>
      <Head>
          <link rel="icon" href="/animag.jpg" />
          <title>{siteTitle}</title>
      </Head>
      <div className = "container mx-auto">
        <ApolloProvider client={client}>
            <Anime/>
        </ApolloProvider>
      </div>
    </div>
  );
}

