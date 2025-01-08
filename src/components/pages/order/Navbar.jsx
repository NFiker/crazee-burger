import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="navlogo">Navlogo</div>
      <div className="navlogin">
        Navlogin
        <h1>Bonjour {username} </h1>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;

  .navlogo {
    background: pink;
  }
  .navlogin {
    background: purple;
  }
`;
