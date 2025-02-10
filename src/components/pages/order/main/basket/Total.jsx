import React from "react";
import { theme } from "../../../../../theme";
import styled from "styled-components";
import Header from "../../../../reusable-ui/Header.jsx";
import { formatPrice } from "../../../../../utils/maths";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { calculateSumToPay } from "./helper";

export default function Total() {
  const { basket, menu } = useContext(OrderContext);
  const sumToPay = calculateSumToPay(basket, menu);

  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amount">{formatPrice(sumToPay)}</span>
      </TotalStyled>
    </Header>
  );
}

const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.style.brandFont};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weight.bold};
  letter-spacing: 2px;
`;
