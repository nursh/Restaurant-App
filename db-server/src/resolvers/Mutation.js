const Mutation = {
  async createMenuItem(parent, args, { prisma }, info) {
    const menuItem = await prisma.createMenuItem({
      name: args.data.name,
      price: args.data.price,
      category: args.data.category
    });
    return menuItem;
  },
  async updateMenuItem(parent, args, { prisma }, info) {
    const menuItem = await prisma.updateMenuItem({
      where: {
        id: args.id
      },
      data: args.data
    });
    return menuItem;
  },
  async deleteMenuItem(parent, args, { prisma }, info) {
    const menuItem = await prisma.deleteMenuItem({ id: args.id });
    return menuItem;
  },
  async createOrder(parent, args, { prisma }, info) {
    const order = await prisma.createOrder({ total: 0 });
    return order;
  },
  async updateOrder(parent, args, { prisma }, info) {
    const order = await prisma.updateOrder({
      where: {
        id: args.id
      },
      data: {
        total: args.data.total
      }
    });
    return order;
  },
  async deleteOrder(parent, args, { prisma }, info) {
    const order = await prisma.deleteOrder({ id: args.id });
    return order;
  },
  async createOrderItem(parent, args, { prisma }, info) {
    const orderItem = await prisma.createOrderItem({
      name: args.data.name,
      quantity: args.data.quantity,
      price: args.data.price,
      order: {
        connect: {
          id: args.data.order
        }
      }
    });
    return orderItem;
  },
  async updateOrderItem(parent, args, { prisma }, info) {
    const orderItem = await prisma.updateOrderItem({
      where: {
        id: args.id
      },
      data: {
        price: args.data.price,
        quantity: args.data.quantity
      }
    });
    return orderItem;
  },
  async deleteOrderItem(parent, args, { prisma }, info) {
    const orderItem = await prisma.deleteOrderItem({ id: args.id });
    return orderItem;
  }
};

export { Mutation as default };
