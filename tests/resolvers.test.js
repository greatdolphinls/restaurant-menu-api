const resolvers = require('../src/resolvers/');
const menuData = require('../src/data/menuData.json');

describe('Resolvers', () => {
  test('getMenu returns all menu categories and items', () => {
    const result = resolvers.Query.getMenu();
    expect(result.length).toBe(Object.keys(menuData).length);

    Object.keys(menuData).forEach((category, index) => {
      expect(result[index].name).toBe(category);
      expect(result[index].items.length).toBe(menuData[category].length);

      menuData[category].forEach((item, itemIndex) => {
        expect(result[index].items[itemIndex].name).toBe(item.name);
        expect(result[index].items[itemIndex].description).toBe(item.description);
        expect(result[index].items[itemIndex].price).toBe(item.price);
      });
    });
  });
});
