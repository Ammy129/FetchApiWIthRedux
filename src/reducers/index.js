import { combineReducers } from "redux";
import { CategoryReducer } from "./CategoryReducer";
import { ProductReducer } from "./ProductReducer";

const rootReducer = combineReducers({
  CategoryReducer,
  ProductReducer,
});
export default rootReducer;
