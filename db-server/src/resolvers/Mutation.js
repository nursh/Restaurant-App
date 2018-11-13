const Mutation = {
  async createMenuInput(parent, args, { prisma }, info) {
    const menuItem = await prisma.createMenuItem({
      name: args.data.name,
      price: args.data.price,
      category: args.data.category
    });
    return menuItem;
  },
  async updateMenuInput(parent, args, { prisma }, info) {
    const menuItem = await prisma.updateMenuItem({
      where: {
        id: args.id
      },
      data: args.data
    });
  },
  async deleteMenuInput(parent, args, { prisma }, info) {
    const menuItem = await prisma.deleteMenuItem({ id: args.id });
    return menuItem;
  }
};

export { Mutation as default };
