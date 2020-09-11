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

      <div className="mx-auto px-8 pt-8 pb-0">
        <h1 className="pl-64 text-4xl pb-2">
          Anime:
        </h1>
          <div className="flex flex-row justify-center  flex-wrap">
            <Anime/>
          </div>
      </div>

        <div className ="h-auto ml-20 ">
          <button className="">Prev</button>
        </div>
  
        <div className="flex static mr-20 justify-end">
          <span className ="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            <button>Next</button>
          </span>
        </div>

        <div className="mx-auto px-8">
        <h1 className="pl-64 text-4xl pb-2">
          Manga:
        </h1>
          <div className="flex flex-row justify-center  flex-wrap">
            <Anime/>
          </div>
      </div>
    </div>
  </ApolloProvider>
  );
}

