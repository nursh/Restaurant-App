import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers/index";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log("Server is running on localhost:4466"));