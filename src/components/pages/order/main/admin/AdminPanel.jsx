import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminPanel() {
  const { isAddSelected, isEditSelected } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
