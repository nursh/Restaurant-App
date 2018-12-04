import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers/index";
import { prisma } from "../prisma/generated/prisma-client/index";

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: () => {
    return {
      prisma
    };
  }
});

const options = {
  endpoint: "/graphql/db"
};
server.start(options, () => console.log(`App is running on port:4000`));
