import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache()
  });

  
const GET_ID = gql`
query ($id: Int, $page: Int, $perPage: Int, $search: String = "One Piece") {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
      }
      popularity
      averageScore
      coverImage {
        medium
      }
    }
  }
}
`;

export default function Tester() {
  const { loading, error, data } = useQuery(GET_ID);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
      data.Page.media.map(({id, title, coverImage}) => (
        <div key={id}>
          <p>
            {id} : {title.romaji}, Heres the image:<img src = {coverImage.medium} height = {100} width = {300}/>
          </p>
        </div>
      ))
      );
}
