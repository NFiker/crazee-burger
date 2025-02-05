import { styled } from "styled-components";
import { theme } from "../../../../../theme/index";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./adminPanel/AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3; // for hide Scrollbar
`;
