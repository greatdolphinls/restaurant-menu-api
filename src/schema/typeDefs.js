const { gql } = require('apollo-server');

const typeDefs = gql`
  type Item {
    name: String
    description: String
    price: Float
    priceOptions: PriceOptions
  }

  type PriceOptions {
    uno: Float
    dos: Float
    tres: Float
  }

  type Category {
    description: String
    items: [Item]
  }

  type Menu {
    category: String
    items: [Item]
  }

  type Query {
    getMenu(category: String): [Menu]
  }
`;

module.exports = typeDefs;
