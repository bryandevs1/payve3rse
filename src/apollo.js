import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-eu-west-2.hygraph.com/v2/clisqlwp800br01uqfx6g5vwj/master', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;