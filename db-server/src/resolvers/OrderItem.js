const OrderItem = {
  async order(parent, args, { prisma }, info) {
    const order = await prisma.orderItem({ id: parent.id }).order();
    return order;
  }
};

export { OrderItem as default };
