import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});

var testing = 3;

const GET_ID = gql`
query ($page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (search: $search) {
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
    }
  }
}
`;

export default function Tester() {
  const { loading, error, data } = useQuery(GET_ID,{
    variables:{
      perPage: testing,
      search: "One Piece"
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    data.Page.media.map(({ id, title, coverImage, popularity, averageScore, type}) => (
        <div  key={id} className="">
          <div className="relative bg-white rounded border">
            <picture className="block bg-gray-200 border-b ">
              <img className="block" src={coverImage.large} alt="Image not found" />
            </picture>
            <div className="p-4">
              <h3 className="text-lg font-bold">
                <a className="stretched-link" href="#" title="Card 1">
                  {title.romaji}
                </a>
              </h3>
              <p className="block mb-2 text-sm text-gray-600">{averageScore===null?"0":averageScore} average scores</p>
              <p>
                  Type: {type}
                  <br/>
                  Popularity: {popularity}
              </p>
            </div>
          </div>
        </div>
    ))
  );
}
