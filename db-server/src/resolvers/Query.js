const Query = {
  menuItem(parent, args, ctx, info) {
    return {
      id: "hdjfahsdasdkfasdf",
      name: "Pounded yam",
      price: 200.0,
      category: "BREAKFAST"
    };
  },
  async menuItems(parent, args, { prisma }, info) {
    const menuItems = await prisma.menuItems();
    return menuItems;
  }, 
  async order(parent, args, { prisma }, info) {
    const order = await prisma.order({ id: args.id });
    return order;
  }
};

export { Query as default };
