const initialState = { data: [], removeLoading: false };

export const CategoryReducer = (state = initialState, action) => {
  if (action.type === "getCategories") {
    return { data: ["All", ...action.payload], removeLoading: true };
  }

  return state;
};
