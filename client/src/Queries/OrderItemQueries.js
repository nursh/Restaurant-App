import gql from 'graphql-tag';

const createOrderItem = gql`
  mutation addOrderItem(
    $name: String!
    $quantity: Int!
    $price: Float!
    $order: ID!
  ) {
    createOrderItem(
      data: { name: $name, quantity: $quantity, price: $price, order: $order }
    ) {
      id
    }
  }
`;

const removeOrderItem = gql`
  mutation($id: ID!) {
    deleteOrderItem(id: $id) {
      id
    }
  }
`;

const updateOrderItem = gql`
  mutation($id: ID!, $quantity: Int) {
    updateOrderItem(id: $id, data: { quantity: $quantity }) {
      id
    }
  }
`;

export { createOrderItem, removeOrderItem, updateOrderItem };