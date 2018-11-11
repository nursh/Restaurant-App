const Order = {
  async items(parent, args, { prisma }, info) {
    const items = await prisma.order({ id: parent.id }).items();
    return items;
  }
};

export { Order as default };
