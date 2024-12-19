const menuData = require('../data/menuData.json');

const resolvers = {
  Query: {
    getMenu: () => {
      return Object.keys(menuData).map((category) => ({
        name: category,
        items: menuData[category].map((item) => ({
          name: item.name,
          description: item.description,
          price: item.price,
        })),
      }));
    },
  },
};

module.exports = resolvers;
