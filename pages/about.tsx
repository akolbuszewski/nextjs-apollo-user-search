import * as React from 'react'
import withApollo from '../lib/withApollo'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { User } from '../interfaces/User';
import { Card } from '../components/Card';


const QUERY2 = gql`
query SearchUsers($query: String!, $first: Int! ) {
  search(query: $query, type: USER, first: $first) {
    edges {
      node {
        ... on User {
          login,
          name,
          bio,
          websiteUrl,
          email,
          avatarUrl,
        }
      }
    }
  }
}`

const mapQueryResultToUsers = (results: any): User[] => {
  return results.search.edges.reduce(
    (users: User[], edge: any) => [...users, edge.node],
    [],
  )
}

const AboutPage: React.FunctionComponent = () => {

  const { loading, error, data } = useQuery(QUERY2, {
    variables: { query: 'Dan Abramov in:name', first: 10 },
  });
 
  if(error){
    return <h1>{JSON.stringify(error)}</h1>
  }
  if (loading || !data) {
    return <h1>loading...</h1>;
  }

  return (
    <section>
    {mapQueryResultToUsers(data).map(user => 
          <Card {...user}></Card>
          )}
          </section>
  )
}

export default withApollo(AboutPage)
