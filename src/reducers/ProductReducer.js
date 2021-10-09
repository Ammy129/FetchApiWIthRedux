const initialState = { data: [], removeLoading: false };

export const ProductReducer = (state = initialState, action) => {
  if (action.type === "getProducts") {
    return { data: action.payload, removeLoading: true };
  } else if (action.type === "changeProducts") {
    return { data: action.payload, removeLoading: false };
  } else if (action.type === "getCategoryProducts") {
    return { data: action.payload, removeLoading: true };
  }

  return state;
};
