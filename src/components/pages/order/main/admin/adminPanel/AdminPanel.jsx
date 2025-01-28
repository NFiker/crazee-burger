import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { getTabsConfig, getTabsSelected } from "./getTabsConfig";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabsSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>{tabSelected && tabSelected.Content}</AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 240px;
  padding: 30px 5%;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
