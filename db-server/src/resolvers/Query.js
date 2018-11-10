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
  }
};

export { Query as default };
