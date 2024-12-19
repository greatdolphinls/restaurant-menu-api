const { ApolloServer, gql } = require('apollo-server');
const { createTestClient } = require('apollo-server-testing');
const typeDefs = require('../src/schema/typeDefs');
const resolvers = require('../src/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { query } = createTestClient(server);

describe('GraphQL API', () => {
  it('fetches the full menu', async () => {
    const GET_MENU = gql`
      query {
        getMenu {
          category
          items {
            name
            description
            price
            priceOptions {
              uno
              dos
              tres
            }
          }
        }
      }
    `;

    const res = await query({ query: GET_MENU });
    
    expect(res.errors).toBeUndefined();
    expect(res.data.getMenu).toHaveLength(9);
    expect(res.data.getMenu[0].items[0].name).toBeDefined();
  });
});
