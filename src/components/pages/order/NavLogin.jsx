import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navlogin({ username }) {
  return (
    <NavLoginStyled>
      Navlogin
      <h1>Bonjour {username} </h1>
      <Link to="/">
        <button>Se déconnecter</button>
      </Link>
    </NavLoginStyled>
  );
}

const NavLoginStyled = styled.div`
  background: purple;
`;
