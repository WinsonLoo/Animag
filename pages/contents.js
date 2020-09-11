import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';
import {searchName} from '../components/navbar.js'

export const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});

export const GET_DATA = gql`
query ($type: MediaType, $isAdult: Boolean, $page: Int, $perPage: Int, $search: String) {
  Page (, page: $page, perPage: $perPage) {
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
        search: searchName===""?null:searchName,
        perPage: 4,
        currentPage: 1,
        type:"MANGA"
      }
    });
    if (loading) return <p></p>;
    if (error) return <p>Error :(</p>;

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


export default function Anime() {
    const { loading, error, data } = useQuery(GET_DATA,{
        variables:{
          isAdult: false,
          search: searchName===""?null:searchName,
          perPage: 4,
          currentPage:1,
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
