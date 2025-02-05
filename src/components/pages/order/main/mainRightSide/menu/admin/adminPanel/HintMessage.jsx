import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../../../theme";
import { HiCursorClick } from "react-icons/hi";

export default function HintMessage() {
  return (
    <HintMessageStyled>
      <span className="hint">Cliquez sur un produit pour le modifier</span>
      <HiCursorClick />
    </HintMessageStyled>
  );
}

const HintMessageStyled = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.fonts.style.brandFont};
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};

  position: relative;
  top: 50px;

  span {
    margin-right: 10px;
  }
`;
