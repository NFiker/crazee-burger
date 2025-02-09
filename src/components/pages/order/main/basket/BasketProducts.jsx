import React from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { findObjectById } from "../../../../../utils/array";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";

export default function BasketProducts() {
  const { basket, menu, isModeAdmin, handleDeleteBasketProduct } =
    useContext(OrderContext);

  const handleOnDelete = (id) => {
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu);

        return (
          <div key={basketProduct.id} className="basket-card">
            <BasketCard
              {...menuProduct}
              quantity={basketProduct.quantity}
              imageSource={
                menuProduct.imageSource
                  ? menuProduct.imageSource
                  : IMAGE_COMING_SOON
              }
              onDelete={() => handleOnDelete(basketProduct.id)}
              isClickable={isModeAdmin}
            />
          </div>
        );
      })}
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
