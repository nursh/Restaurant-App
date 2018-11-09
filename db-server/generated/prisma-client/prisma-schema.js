module.exports = {
        typeDefs: /* GraphQL */ `type AggregateFood {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Food {
  id: ID!
  name: String!
  price: Float!
}

type FoodConnection {
  pageInfo: PageInfo!
  edges: [FoodEdge]!
  aggregate: AggregateFood!
}

input FoodCreateInput {
  name: String!
  price: Float!
}

type FoodEdge {
  node: Food!
  cursor: String!
}

enum FoodOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FoodPreviousValues {
  id: ID!
  name: String!
  price: Float!
}

type FoodSubscriptionPayload {
  mutation: MutationType!
  node: Food
  updatedFields: [String!]
  previousValues: FoodPreviousValues
}

input FoodSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FoodWhereInput
  AND: [FoodSubscriptionWhereInput!]
  OR: [FoodSubscriptionWhereInput!]
  NOT: [FoodSubscriptionWhereInput!]
}

input FoodUpdateInput {
  name: String
  price: Float
}

input FoodWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  AND: [FoodWhereInput!]
  OR: [FoodWhereInput!]
  NOT: [FoodWhereInput!]
}

input FoodWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createFood(data: FoodCreateInput!): Food!
  updateFood(data: FoodUpdateInput!, where: FoodWhereUniqueInput!): Food
  updateManyFoods(data: FoodUpdateInput!, where: FoodWhereInput): BatchPayload!
  upsertFood(where: FoodWhereUniqueInput!, create: FoodCreateInput!, update: FoodUpdateInput!): Food!
  deleteFood(where: FoodWhereUniqueInput!): Food
  deleteManyFoods(where: FoodWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  food(where: FoodWhereUniqueInput!): Food
  foods(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Food]!
  foodsConnection(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoodConnection!
  node(id: ID!): Node
}

type Subscription {
  food(where: FoodSubscriptionWhereInput): FoodSubscriptionPayload
}
`
      }
    