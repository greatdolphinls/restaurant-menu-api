const menuData = require('../data/menuData.json');

const resolvers = {
  Query: {
    getMenu: (_, { category }) => {
      if (category) {
        const categoryData = menuData[category];
        if (categoryData) {
          return [
            {
              category: category,
              items: categoryData.items.map(item => ({
                name: item.name,
                description: item.description,
                price: item.price || item.priceOptions?.uno,
                priceOptions: item.priceOptions || null
              }))
            }
          ];
        } else {
          return [];
        }
      }
      return Object.keys(menuData).map(categoryKey => ({
        category: categoryKey,
        items: menuData[categoryKey].items.map(item => ({
          name: item.name,
          description: item.description,
          price: item.price || item.priceOptions?.uno,
          priceOptions: item.priceOptions || null
        }))
      }));
    }
  }
};

module.exports = resolvers;
