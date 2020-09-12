import Head from 'next/head'
import Link from 'next/link'
import { useQuery, ApolloProvider } from '@apollo/client';
import { useState} from 'react'
import Navbar, { siteTitle } from '../../components/navbar.js'
import {client,GET_DATA} from '../contents.js'

var counter = 2;

//a is for prev, b is for next
var status = 'a';


function decrement(){
  if(status ==='b'){
    counter--;
    status = 'a';
  }else{
    counter--;
  }
}

function increment(){
  if(status ==='a'){
    counter++;
    status = 'b';
  }else{
    counter++;
  }
}

function Animepage(){
  const { loading, error, data } = useQuery(GET_DATA,{
    variables:{
      isAdult: false,
      perPage: 4,
      page: counter,
      type:"ANIME"
    }
  });
  if (loading) return <p></p>;
  if (error) return <p></p>;

return data.Page.media.map(({ id, title, coverImage, popularity, averageScore, type}) =>(
    <div>
        {/* card implementation starts here */}
            <div key={id} className="relative bg-white rounded border-b-4 p-0 mr-10 mb-10">
              <picture className="block bg-gray-200 ">
                  <img className="h-64 w-full object-cover" src={coverImage.large} alt="Image not found" />
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

function Mangapage(){
  const { loading, error, data } = useQuery(GET_DATA,{
    variables:{
      isAdult: false,
      perPage: 4,
      page: counter,
      type:"MANGA"
    }
  });
  if (loading) return <p></p>;
  if (error) return <p></p>;

return data.Page.media.map(({ id, title, coverImage, popularity, averageScore, type}) =>(
    <div>
        {/* card implementation starts here */}
            <div key={id} className="relative bg-white rounded border-b-4 p-0 mr-10 mb-10">
              <picture className="block bg-gray-200 ">
                  <img className="h-64 w-full object-cover" src={coverImage.large} alt="Image not found" />
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

export default function Pagination() {

return (
  <ApolloProvider client={client}>
    <div>
      <Navbar pagination/>
      <Head>
        <link rel="icon" href="/animag.jpg" />
        <title>{siteTitle}</title>
      </Head>
      <table className="flex justify-between">
      <tbody>
        <tr>
          <td className="p-24">
          
            <button className ="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg p-2">
              <Link href="/page/[id]" as={`/page/${counter}`}>
                <a  onClick ={counter>0?decrement:alert('No More Pages!')}>  Prev </a>
              </Link>
            </button>
          
          </td>

          <td>
            <div className="container mx-auto p-8">
              <h1 className="text-4xl mb-2">Anime:</h1>
                <div className="flex flex-row flex-wrap pl-8">
                    <Animepage/>
                </div>
              <h1 className="text-4xl mb-2">Manga:</h1>
                <div className="flex flex-row flex-wrap pl-8">
                <Mangapage/>
                </div>
            </div>
          </td>

          <td className="p-24">
            
              
              <button className ="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg p-2">
                <Link href="/page/[id]" as={`/page/${counter}`}>
                    <a onClick ={increment}>Next</a>
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