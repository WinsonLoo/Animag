import Head from 'next/head'
import Link from 'next/link'
import { ApolloProvider } from '@apollo/client';
import Navbar, { siteTitle } from '../components/navbar.js'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});

export const GET_DATA = gql`
query ($type: MediaType, $isAdult: Boolean, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (type: $type, isAdult: $isAdult, search: $search) {
      id
      title {
        romaji
      }
      popularity
      averageScore
      coverImage {
        large
      }
      type
      isAdult
    }
  }
}
`;

export function Manga() {
  const { loading, error, data } = useQuery(GET_DATA,{
      variables:{
        isAdult: false,
        perPage: 4,
        type:"MANGA"
      }
    });
    if (loading) return <p></p>;
    if (error) return <p>Error :(</p>;

  return data.Page.media.map(({ id, title, coverImage, popularity, averageScore, type}) =>(
      <div key={id}>
          {/* card implementation starts here */}
              <div className="relative bg-white rounded border-b-4 p-0 mr-10 mb-10">
                <picture className="block bg-gray-200 ">
                    <img className="h-64 w-56 object-cover" src={coverImage.large} alt="Image not found" />
                </picture>
                <div className="p-4">
                    <h3 className="flex flex-wrap text-lg font-bold">
                        {title.romaji}
                    </h3>
                    <p className="block mb-2 text-sm text-gray-600">{averageScore===null?"0":averageScore} average scores</p>
                    <p>
                        Type: {type}
                        <br/>
                        Popularity: {popularity}
                    </p>
                </div>
              </div>
          {/*card implementation ends here*/}    
      </div>
  ));
}


export function Anime() {
    const { loading, error, data } = useQuery(GET_DATA,{
        variables:{
          isAdult: false,
          perPage: 4,
          currentPage:2,
          type:"ANIME"
        }
      });
      if (loading) return <p></p>;
      if (error) return <p></p>;

    return data.Page.media.map(({ id, title, coverImage, popularity, averageScore, type}) =>(
        <div key={id} >
            {/* card implementation starts here */}
                <div className="relative bg-white rounded border-b-4 p-0 mr-10 mb-10">
                  <picture className="block bg-gray-200 ">
                      <img className="h-64 w-56 object-cover" src={coverImage.large} alt="Image not found" />
                  </picture>
                  <div className="p-4">
                      <h3 className="flex flex-wrap text-lg font-bold">
                          {title.romaji}
                      </h3>
                      <p className="block mb-2 text-sm text-gray-600">{averageScore===null?"0":averageScore} average scores</p>
                      <p>
                          Type: {type}
                          <br/>
                          Popularity: {popularity}
                      </p>
                  </div>
                </div>
            {/*card implementation ends here*/}    
        </div>
    ));
}

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