import React from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";

export default function BasketProducts({
  basket,
  isModeAdmin,
  handleDeleteBasketProduct,
}) {
  const handleOnDelete = (id) => {
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <div key={basketProduct.id} className="basket-card">
          <BasketCard
            {...basketProduct}
            onDelete={() => handleOnDelete(basketProduct.id)}
            isModeAdmin={isModeAdmin}
          />
        </div>
      ))}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .basket-card {
    margin: 10px 16px;
    height: 86px;
    /* box-sizing: border-box; */

    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;
