import React from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { findObjectById } from "../../../../../utils/array";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import { checkIfProductClicked } from "../mainRightSide/menu/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function BasketProducts() {
  const {
    username,
    basket,
    menu,
    isModeAdmin,
    handleDeleteBasketProduct,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <BasketProductsStyled>
      <TransitionGroup>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menu);

          return (
            <CSSTransition
              appear={true}
              classNames={"anim-step"}
              key={basketProduct.id}
              timeout={500}
            >
              <div className="basket-card">
                <BasketCard
                  {...menuProduct}
                  quantity={basketProduct.quantity}
                  imageSource={
                    menuProduct.imageSource
                      ? menuProduct.imageSource
                      : IMAGE_COMING_SOON
                  }
                  onDelete={() => handleOnDelete(event, basketProduct.id)}
                  isClickable={isModeAdmin}
                  onClick={
                    isModeAdmin
                      ? () => handleProductSelected(basketProduct.id)
                      : null
                  }
                  isSelected={checkIfProductClicked(
                    basketProduct.id,
                    productSelected.id
                  )}
                  className={"anim-card"}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .anim-step-appear,
  .anim-step-enter {
    .anim-card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .anim-step-appear-active,
  .anim-step-enter-active {
    .anim-card {
      transition: 0.5s;
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .anim-step-exit {
    .anim-card {
      transition: 0.2s;
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .anim-step-exit-active {
    .anim-card {
      transition: 0.5s;
      transform: translateX(-100px);
      opacity: 0%;
    }
  }

  .basket-card {
    margin: 10px 16px;
    height: 86px;

    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;
