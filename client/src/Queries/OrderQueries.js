import gql from 'graphql-tag';

const createOrder = gql`
  mutation {
    createOrder {
      id
    }
  }
`;

const updateOrder = gql`
  mutation($id: ID!, $total: Float!) {
    updateOrder(id: $id, data: { total: $total }) {
      id
    }
  }
`;

const fetchOrders = gql`
  query($id: ID!) {
    order(id: $id) {
      items {
        id
        name
        price
        quantity
      }
      total
    }
  }
`;

export { createOrder, updateOrder, fetchOrders };