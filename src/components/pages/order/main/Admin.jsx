import { styled } from "styled-components";

export default function Admin() {
  return <AdminStyled>Admin</AdminStyled>;
}

const AdminStyled = styled.div`
  background: red;
  position: absolute;
  height: 250px;
  bottom: 0;
  left: 0;
  right: 0;
`;
