const { gql } = require('apollo-server');

const typeDefs = gql`
  # Define the structure for a menu item
  type MenuItem {
    name: String!
    description: String
    price: Float!
  }

  # Define the structure for a category of menu items
  type Category {
    name: String!
    items: [MenuItem!]!
  }

  # Define the main query type
  type Query {
    # Fetch all menu categories with their items
    getMenu: [Category!]!
  }
`;

module.exports = typeDefs;
