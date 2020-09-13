import Head from 'next/head'
import Link from 'next/link'
import { useQuery, ApolloProvider } from '@apollo/client';
import Navbar, { siteTitle } from '../../components/navbar.js'
import Loading from '../../components/loading.js'
import {client,GET_DATA} from '../index.js'

var counter = 2;

//a is for prev, b is for next
var status = 'a';


export function decrement(){
  if(status ==='b'){
    counter--;
    status = 'a';
  }else{
    counter--;
  }
}

export function increment(){
  if(status ==='a'){
    counter++;
    status = 'b';
  }else{
    counter++;
  }
}

export function Animepage(){
  const { loading, error, data } = useQuery(GET_DATA,{
    variables:{
      isAdult: false,
      perPage: 4,
      page: counter,
      type:"ANIME"
    }
  });
  if (loading) return <p><Loading anime/></p>;
  if (error) return <p>Error :(</p>;

return data.Page.media.map(({ id, title, coverImage, popularity, averageScore, type}) =>(
    <div key={id}>
    <div className="relative bg-white rounded border-b-4 p-0 mr-10 mb-10 w-64">
                  <picture className="block bg-gray-200">
                      <img className="h-70 w-64 object-cover" src={coverImage.large} alt="Image not found" />
                  </picture>
                  <div className="p-4 h-56">
                    <div className = "h-24">
                      <h3 className="flex flex-wrap text-lg font-bold overflow-visible">
                          {title.romaji}
                      </h3>
                    </div>
                    <div className = "pt-2">
                      <p className="block mb-2 text-sm text-gray-600">
                         average scores of <span className="font-bold">{averageScore===null?"0":averageScore} </span> 
                      </p>
                      <p>
                          Type: {type}
                          <br/>
                          Popularity: {popularity}
                      </p>
                    </div>
                  </div>
                </div>
        {/*card implementation ends here*/}    
    </div>
));
}

export function Mangapage(){
  const { loading, error, data } = useQuery(GET_DATA,{
    variables:{
      isAdult: false,
      perPage: 4,
      page: counter,
      type:"MANGA"
    }
  });
  if (loading) return <p><Loading manga/></p>;
  if (error) return <p>Error :(</p>;

return data.Page.media.map(({ id, title, coverImage, popularity, averageScore, type}) =>(
    <div key={id}>
        {/* card implementation starts here */}
        <div className="relative bg-white rounded border-b-4 p-0 mr-10 mb-10 w-64">
                  <picture className="block bg-gray-200">
                      <img className="h-70 w-64 object-cover" src={coverImage.large} alt="Image not found" />
                  </picture>
                  <div className="p-4 h-56">
                    <div className = "h-24">
                      <h3 className="flex flex-wrap text-lg font-bold overflow-visible">
                          {title.romaji}
                      </h3>
                    </div>
                    <div className = "pt-2">
                      <p className="block mb-2 text-sm text-gray-600">
                         average scores of <span className="font-bold">{averageScore===null?"0":averageScore} </span> 
                      </p>
                      <p>
                          Type: {type}
                          <br/>
                          Popularity: {popularity}
                      </p>
                    </div>
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
      <div className= "flex">
            
              <Link href="/page/[id]" as={`/page/${counter}`}>
                  <button onClick ={counter>0?decrement:alert('No More Pages!')} className ="w-1/5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg p-2">
                    <a>  Prev </a>
                  </button>
              </Link>
            
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
            <Link href="/page/[id]" as={`/page/${counter}`}>
              <button onClick ={increment} className ="w-1/5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-lg p-2">
                    <a>Next</a>
              </button>
            </Link>
        </div>
    </div>
  </ApolloProvider>
  );
}