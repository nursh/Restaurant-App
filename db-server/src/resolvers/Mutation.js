const Mutation = {
  async createMenuInput(parent, args, { prisma }, info) {
    const menuItem = await prisma.createmenuItem({
      name: args.data.name,
      price: args.data.price,
      category: args.data.category
    });
    return menuItem;
  },
  async deleteMenuInput(parent, args, { prisma }, info) {
    const menuItem = await prisma.deletemenuItem({ id: args.id });
    return menuItem;
  }
};

export { Mutation as default };
