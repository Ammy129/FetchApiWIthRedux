import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SingleProduct from "./SingleProduct";
import * as actions from "../action";
import Loading from "./Loading";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.ProductReducer);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    dispatch(actions.getProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContainer>
      {!products.removeLoading && <Loading />}
      <Wrapper>
        {products.data.map(product => (
          <SingleProduct key={product.id} {...product} />
        ))}
      </Wrapper>
    </ProductContainer>
  );
};

const ProductContainer = styled.section`
  display: grid;
  place-items: center;
  min-height: 85vh;
`;

const Wrapper = styled.article`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export default Products;
