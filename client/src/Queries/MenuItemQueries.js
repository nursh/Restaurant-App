import gql from 'graphql-tag';

const getMenuItems = gql`
  query($category: Category!) {
    menuItems(category: $category) {
      name
      price
    }
  }
`;

export { getMenuItems };