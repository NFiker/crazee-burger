import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig, getTabsSelected } from "./getTabsConfig";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabsSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>
      {/* {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"} */}
      {currentTabSelected === tabSelected.index && tabSelected.label}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 251px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.subtle};
`;
