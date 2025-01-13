import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import NavbarRightSideIncomplet from "./NavbarRightSideIncomplet";

export default function Navlogin({ username }) {
  return (
    <NavLoginStyled>
      {/* <div className="admin-button">Admin Button</div> */}
      <NavbarRightSideIncomplet />
      <Profile username={username} />
    </NavLoginStyled>
  );
}

const NavLoginStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap: 40px;

  /* .admin-button {
    background: lightblue;
  } */
`;
