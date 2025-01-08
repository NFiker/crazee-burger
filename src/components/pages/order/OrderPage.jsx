import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";

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
  background: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    margin: 0 3rem;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;
