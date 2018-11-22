const getCategories = categoryList => {
  const categories = [];
  if (!categoryList) return categories;
  categoryList = categoryList.map(item => item.category);
  categoryList.forEach(category => {
    if (!categories.includes(category)) categories.push(category);
  });

  return categories;
};

const getCategoryName = category => {
  return category.replace("_", " ")
}

export { getCategories, getCategoryName };
