import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: 'https://api.github.com/graphql',
      cache: new InMemoryCache().restore(initialState || {}),
      request: (operation) => {
        const token = 'insert github token hereeee'
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
