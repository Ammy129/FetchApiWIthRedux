import React, { useEffect } from "react";
import SingleCategory from "./SingleCategory";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../action";
import axios from "axios";
import Loading from "./Loading";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.CategoryReducer);

  const fetchCategories = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    dispatch(actions.getCategories(response.data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      {!categories.removeLoading && <Loading />}
      <Wrapper>
        {categories.data.map((category, index) => (
          <SingleCategory key={index} category={category} />
        ))}{" "}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export default Categories;
