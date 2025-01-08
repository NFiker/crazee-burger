import styled from "styled-components";
import NavLogin from "./NavLogin";
import NavLogo from "./NavLogo";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <NavLogo />
      <NavLogin username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
`;
