import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketBody from "./BasketBody";

export default function Basket() {
  return (
    <BasketStyled>
      <Header>
        <Total amountToPay={formatPrice(0)} />
      </Header>
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
