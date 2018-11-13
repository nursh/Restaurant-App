module.exports = {
        typeDefs: /* GraphQL */ `type AggregateMenuItem {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderItem {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum Category {
  BREAKFAST
  MAIN_DISH
  SOUPS
  BITES
  RICE_DISHES
  AFRICAN_HOT_POT
  DELIGHTS
  COLD_STARTER
  PEPPERED_BITES
  PET_DRINKS
  BOTTLE_DRINKS
  CAN_DRINKS
  JUICE
}

scalar Long

type MenuItem {
  id: ID!
  name: String!
  price: Float!
  category: Category!
}

type MenuItemConnection {
  pageInfo: PageInfo!
  edges: [MenuItemEdge]!
  aggregate: AggregateMenuItem!
}

input MenuItemCreateInput {
  name: String!
  price: Float!
  category: Category!
}

type MenuItemEdge {
  node: MenuItem!
  cursor: String!
}

enum MenuItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  category_ASC
  category_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MenuItemPreviousValues {
  id: ID!
  name: String!
  price: Float!
  category: Category!
}

type MenuItemSubscriptionPayload {
  mutation: MutationType!
  node: MenuItem
  updatedFields: [String!]
  previousValues: MenuItemPreviousValues
}

input MenuItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MenuItemWhereInput
  AND: [MenuItemSubscriptionWhereInput!]
  OR: [MenuItemSubscriptionWhereInput!]
  NOT: [MenuItemSubscriptionWhereInput!]
}

input MenuItemUpdateInput {
  name: String
  price: Float
  category: Category
}

input MenuItemUpdateManyMutationInput {
  name: String
  price: Float
  category: Category
}

input MenuItemWhereInput {
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
  category: Category
  category_not: Category
  category_in: [Category!]
  category_not_in: [Category!]
  AND: [MenuItemWhereInput!]
  OR: [MenuItemWhereInput!]
  NOT: [MenuItemWhereInput!]
}

input MenuItemWhereUniqueInput {
  id: ID
}

type Mutation {
  createMenuItem(data: MenuItemCreateInput!): MenuItem!
  updateMenuItem(data: MenuItemUpdateInput!, where: MenuItemWhereUniqueInput!): MenuItem
  updateManyMenuItems(data: MenuItemUpdateManyMutationInput!, where: MenuItemWhereInput): BatchPayload!
  upsertMenuItem(where: MenuItemWhereUniqueInput!, create: MenuItemCreateInput!, update: MenuItemUpdateInput!): MenuItem!
  deleteMenuItem(where: MenuItemWhereUniqueInput!): MenuItem
  deleteManyMenuItems(where: MenuItemWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createOrderItem(data: OrderItemCreateInput!): OrderItem!
  updateManyOrderItems(data: OrderItemUpdateManyMutationInput!, where: OrderItemWhereInput): BatchPayload!
  deleteManyOrderItems(where: OrderItemWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  items(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem!]
  total: Float!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  items: OrderItemCreateManyWithoutOrderInput
  total: Float!
}

input OrderCreateOneWithoutItemsInput {
  create: OrderCreateWithoutItemsInput
  connect: OrderWhereUniqueInput
}

input OrderCreateWithoutItemsInput {
  total: Float!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

type OrderItem {
  name: String!
  quantity: Int!
  price: Float!
  order: Order!
}

type OrderItemConnection {
  pageInfo: PageInfo!
  edges: [OrderItemEdge]!
  aggregate: AggregateOrderItem!
}

input OrderItemCreateInput {
  name: String!
  quantity: Int!
  price: Float!
  order: OrderCreateOneWithoutItemsInput!
}

input OrderItemCreateManyWithoutOrderInput {
  create: [OrderItemCreateWithoutOrderInput!]
}

input OrderItemCreateWithoutOrderInput {
  name: String!
  quantity: Int!
  price: Float!
}

type OrderItemEdge {
  node: OrderItem!
  cursor: String!
}

enum OrderItemOrderByInput {
  name_ASC
  name_DESC
  quantity_ASC
  quantity_DESC
  price_ASC
  price_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderItemPreviousValues {
  name: String!
  quantity: Int!
  price: Float!
}

type OrderItemSubscriptionPayload {
  mutation: MutationType!
  node: OrderItem
  updatedFields: [String!]
  previousValues: OrderItemPreviousValues
}

input OrderItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderItemWhereInput
  AND: [OrderItemSubscriptionWhereInput!]
  OR: [OrderItemSubscriptionWhereInput!]
  NOT: [OrderItemSubscriptionWhereInput!]
}

input OrderItemUpdateManyMutationInput {
  name: String
  quantity: Int
  price: Float
}

input OrderItemUpdateManyWithoutOrderInput {
  create: [OrderItemCreateWithoutOrderInput!]
}

input OrderItemWhereInput {
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
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  order: OrderWhereInput
  AND: [OrderItemWhereInput!]
  OR: [OrderItemWhereInput!]
  NOT: [OrderItemWhereInput!]
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  total_ASC
  total_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPreviousValues {
  id: ID!
  total: Float!
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  items: OrderItemUpdateManyWithoutOrderInput
  total: Float
}

input OrderUpdateManyMutationInput {
  total: Float
}

input OrderWhereInput {
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
  items_every: OrderItemWhereInput
  items_some: OrderItemWhereInput
  items_none: OrderItemWhereInput
  total: Float
  total_not: Float
  total_in: [Float!]
  total_not_in: [Float!]
  total_lt: Float
  total_lte: Float
  total_gt: Float
  total_gte: Float
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  menuItem(where: MenuItemWhereUniqueInput!): MenuItem
  menuItems(where: MenuItemWhereInput, orderBy: MenuItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MenuItem]!
  menuItemsConnection(where: MenuItemWhereInput, orderBy: MenuItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MenuItemConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderItems(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem]!
  orderItemsConnection(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderItemConnection!
  node(id: ID!): Node
}

type Subscription {
  menuItem(where: MenuItemSubscriptionWhereInput): MenuItemSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderItem(where: OrderItemSubscriptionWhereInput): OrderItemSubscriptionPayload
}
`
      }
    