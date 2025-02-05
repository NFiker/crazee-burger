import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";

export default function Basket() {
  return (
    <BasketStyled>
      <Header>
        <Total amountToPay={formatPrice(0)} />
      </Header>
      <div className="body">body</div>
      <Header>Footer</Header>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;

  .body {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }
`;
