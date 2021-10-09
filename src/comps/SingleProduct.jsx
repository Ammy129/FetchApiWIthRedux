import React from "react";
import styled from "styled-components";

const SingleProduct = ({ description, id, image, price, rating, title }) => {
  const { count, rate } = rating;
  return (
    <Wrapper>
      <figure>
        <div className="figure">
          <img src={image} alt={title} />
        </div>
      </figure>
      <h3 className="name">{title}</h3>
      <p className="desc">
        {description.length > 200
          ? `${description.substr(0, 200)}...`
          : description}
      </p>

      <div className="btn-wrapper">
        <button className="buy">Buy @ Rs{price}</button>
        <button className="rating">
          {rate}/5 rated by {count}
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  text-align: center;
  height: 350px;
  border: 1px solid #999;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0 auto;
  }

  .figure {
    width: 100px;
    height: 100px;
    overflow: hidden;
  }
  figure {
    display: grid;
    place-items: center;
    margin-top: 1rem;
  }
  .name {
    color: #777;
    font-size: 0.9rem;
    margin: 1rem 0;
  }

  .desc {
    color: #999;
    font-size: 0.6rem;
    margin-bottom: 4rem;
  }

  .btn-wrapper {
    display: flex;
  }

  button {
    all: unset;
    background: yellow;
    color: #000;
    font-weight: bold;
    font-size: 0.8rem;
    width: 100%;
    padding: 0.5rem;
    text-align: center;
  }

  .rating {
    background: green;
    color: white;
  }
`;

export default SingleProduct;
