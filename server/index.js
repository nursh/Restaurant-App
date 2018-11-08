const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const app = express();
const port = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });


app.listen(port, () =>
  console.log(`Express-Graphql is running on port ${port}`)
);
