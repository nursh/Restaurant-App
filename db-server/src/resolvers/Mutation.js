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
  }
};

export { Mutation as default };
