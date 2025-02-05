import styled from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./menu/Menu";
import MainRightSide from "./menu/MainRightSide";

export default function Main() {
  return (
    <MainStyled>
      <Basket />
      <MainRightSide />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  overflow: hidden;
  display: grid;
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);
  flex: 1;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.medium};
  display: grid;
  grid-template-columns: 1fr 3fr;
`;
