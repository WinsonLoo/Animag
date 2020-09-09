import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});

const GET_ID = gql`
query ($id: Int, $page: Int, $perPage: Int = 3, $search: String) {
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
        extraLarge
      }
    }
  }
}
`;

var variables = {
  page: 1,
  perPage: 3
};

export default function Tester() {
  const { loading, error, data } = useQuery(GET_ID);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    data.Page.media.map(({ id, title, coverImage }) => (
      <div key={id}>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <div className="relative bg-white rounded border">
            <picture className="block bg-gray-200 border-b ">
              <img className="block" src={coverImage.extraLarge} alt="Card 1" />
            </picture>
            <div className="p-4">
              <h3 className="text-lg font-bold">
                <a className="stretched-link" href="#" title="Card 1">
                  {title.romaji}
                </a>
              </h3>
              <time className="block mb-2 text-sm text-gray-600" datetime="2019-01-01">1st January 2019</time>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}
