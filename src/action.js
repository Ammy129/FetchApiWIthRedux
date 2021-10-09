export const getCategories = products => {
  return {
    type: "getCategories",
    payload: products,
  };
};

export const getProducts = products => {
  return {
    type: "getProducts",
    payload: products,
  };
};

export const changeProducts = products => {
  return {
    type: "changeProducts",
    payload: products,
  };
};

export const getCategoryProducts = products => {
  return {
    type: "getCategoryProducts",
    payload: products,
  };
};
