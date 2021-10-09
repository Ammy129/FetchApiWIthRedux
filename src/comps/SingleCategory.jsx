import axios from "axios";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as actions from "../action";

const SingleCategory = ({ category }) => {
  const dispatch = useDispatch();

  const fetchCategoryProduct = async () => {
    dispatch(actions.changeProducts([]));
    let response;
    if (category === "All") {
      response = await axios.get(`https://fakestoreapi.com/products`);
    } else {
      response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
    }
    dispatch(actions.getCategoryProducts(response.data));
  };

  return <Button onClick={fetchCategoryProduct}>{category}</Button>;
};

const Button = styled.button`
  all: unset;
  font-size: 0.8rem;
  background: orange;
  color: white;
  padding: 0.5rem 3rem;
  border-radius: 4px;
  cursor: pointer;
`;

export default SingleCategory;
