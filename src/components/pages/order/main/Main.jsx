import styled from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";
import Admin from "./admin/Admin";
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";

export default function Main() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  overflow: hidden;
  display: grid;
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);
  /* flex: 1; */
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: grid;
  /* grid-template-columns: 1fr 3fr; */

  .menu-and-admin {
    position: relative;
    display: grid;
  }
`;
