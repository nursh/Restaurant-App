const Query = {
  async menuItem(parent, args, { prisma }, info) {
    const menuItem = await prisma.menuItem({ id: args.id });
    return menuItem;
  },
  async menuItems(parent, args, { prisma }, info) {

    const opArgs = {};

    if (args.category) {
      opArgs.where = {
        category: args.category,
      }
    }

    const menuItems = await prisma.menuItems(opArgs);
    return menuItems;
  }, 
  async order(parent, args, { prisma }, info) {
    const order = await prisma.order({ id: args.id });
    return order;
  }
};

export { Query as default };
