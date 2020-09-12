import Head from 'next/head'
import Link from 'next/link'
import { ApolloProvider } from '@apollo/client';
import Navbar, { siteTitle } from '../components/navbar.js'
import Anime,{client,Manga} from './contents.js'

export default function Home() {

return (
  <ApolloProvider client={client}>
    <div>
      <Navbar home />
      <Head>
        <link rel="icon" href="/animag.jpg" />
        <title>{siteTitle}</title>
      </Head>
      <table className="flex justify-between">
      <tbody>
        <tr>
          <td className="p-24">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg p-2">
                Prev
            </button>
          </td>

          <td>
            <div className="container mx-auto p-8">
              <h1 className="text-4xl mb-2">Anime:</h1>
                <div className="flex flex-row flex-wrap pl-8">
                  <Anime/>
                </div>
              <h1 className="text-4xl mb-2">Manga:</h1>
                <div className="flex flex-row flex-wrap pl-8">
                  <Manga/>
                </div>
            </div>
          </td>
          <td className="p-24">
            <button className ="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg p-2">
                <Link href="/page/[id]" as={`/page/${2}`}>
                    Next
                </Link>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </ApolloProvider>
  );
}