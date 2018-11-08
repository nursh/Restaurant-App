const { gql } = require("apollo-server-express");


const typeDefs = gql`

  type Query {
    foods: [FoodItem!]!
    food(id: ID!): FoodItem!
  }

  type FoodItem {
    id: ID!
    name: String!
    price: Float!
  }

`;


module.exports = typeDefs;
