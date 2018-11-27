const Query = {
  async menuItem(parent, args, { prisma }, info) {
    const menuItem = await prisma.menuItem({ id: args.id });
    return menuItem;
  },
  async menuItems(parent, args, { prisma }, info) {
    const opArgs = {};

    if (args.category) {
      opArgs.where = {
        category: args.category
      };
    }

    const menuItems = await prisma.menuItems(opArgs);
    return menuItems;
  },
  async order(parent, args, { prisma }, info) {
    const order = await prisma.order({ id: args.id });
    return order;
  },
  async orders(parent, args, { prisma }, info) {
    const orders = await prisma.orders();
    return orders;
  },
  async orderItem(parent, args, { prisma }, info) {
    const orderItem = await prisma.orderItem({ id: args.id });
    return orderItem;
  },
  async orderItems(parent, args, { prisma }, info) {
    const orderItems = await prisma.orderItems();
    return orderItems;
  },
  play(parent, args, ctx, info) {
    return {
      name: 'Seeking for knowledge',
      token: 'TokenTokenTokenToken'
    };
  }
};

export { Query as default };
