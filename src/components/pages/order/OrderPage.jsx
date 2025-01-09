import { useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./main/Main";
import { theme } from "../../../theme/index";
import Navbar from "./navbar/Navbar";

export default function OrderPage() {
  //State
  const { username } = useParams();

  //Comportements

  //Affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.primary};

  .container {
    height: 95vh;
    margin: 0 1rem;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
