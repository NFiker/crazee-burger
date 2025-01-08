import styled from "styled-components";
import NavLogin from "./NavLogin";
import Logo from "../../reusable-ui/Logo";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <NavLogin username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
