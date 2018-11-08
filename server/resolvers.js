const foodItems = require('./db');

const resolvers = {
  Query: {
    foods: () => foodItems,
    food: (parent, args, ctx, info) => {
      return foodItems.find(food => food.id === args.id);
    }
  },
};

module.exports = resolvers;