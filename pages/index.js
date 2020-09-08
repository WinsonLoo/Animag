import Head from 'next/head'
import { ApolloProvider } from '@apollo/client';
import Tester,{client} from '../lib/posts.js'
import Navbar,{siteTitle} from '../components/navbar.js'
import Anime from './contents.js'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Head>
          <title>{siteTitle}</title>
      </Head>
      <div>
        <ApolloProvider client={client}>
            <Anime/>
        </ApolloProvider>
      </div>
    </div>
  );
}

