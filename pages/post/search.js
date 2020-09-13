import Navbar, { siteTitle, searchName } from '../../components/navbar'
import Head from 'next/head'
import {client,GET_DATA} from "../index"
import { ApolloProvider, useQuery } from '@apollo/client';


export function Data(){
    const { loading, error, data } = useQuery(GET_DATA,{
        variables:{
          isAdult: false,
          search: searchName,
        }
      });
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
  
    return data.Page.media.map(({ id, title, coverImage, popularity, averageScore, type}) =>(
        <div key={id}>
            {/* card implementation starts here */}
                <div className="relative bg-white rounded border-b-4 p-0 mr-10 mb-10 w-56">
                  <picture className="block bg-gray-200 ">
                      <img className="h-64 w-56 object-cover" src={coverImage.large} alt="Image not found" />
                  </picture>
                  <div className="p-4 h-64">
                      <h3 className="flex flex-wrap text-lg font-bold overflow-visible">
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

export default function SearchInfo(){
    return(
        <div>
            <Head>
                <title>{siteTitle}/about</title>
            </Head>
                <Navbar search/>
            <ApolloProvider client={client}>
            <div className="container mx-auto p-8">
              <h1 className="text-4xl mb-2">Search Result of: {searchName}</h1>
                <div className="flex flex-row flex-wrap pl-8">
                  <Data/>
                </div>

            </div>
            </ApolloProvider>
        </div>
    );
}