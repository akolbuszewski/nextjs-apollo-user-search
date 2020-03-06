import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: 'https://api.github.com/graphql',
      cache: new InMemoryCache().restore(initialState || {}),
      request: (operation) => {
        const token = '65c9cd3b9654d1aed7567d89587e92fc24b1cc4b'
        operation.setContext({
          headers: {
            Authorization: `token ${token}`
          }
        })
      }
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);
