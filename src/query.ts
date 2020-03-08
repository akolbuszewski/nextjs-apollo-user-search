import { gql } from "apollo-boost";

export const SEARCH_USERS_QUERY = gql`
query SearchUsers($query: String!, $first: Int! ) {
  search(query: $query, type: USER, first: $first) {
    edges {
      node {
        ... on User {
          login,
          avatarUrl,
        }
      }
    }
  }
}`

export const GET_USER_QUERY = gql`
query GetUser($login: String!) {
user(login: $login) {
    login,
    name,
    bio,
    websiteUrl,
    email,
  }
}
`    