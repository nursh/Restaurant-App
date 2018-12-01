const getTotal = (order) => {
  if (!order) return 0;
  if (order.items.length === 0) return 0;

  return order.items.reduce(
    (sum, item) => (sum += item.price * item.quantity),
    0
  );
}

export default getTotal;