import styled from "styled-components";

export default function EmptyMenuAdmin({ resetMenu }) {
  return (
    <div>
      <span>Pas de produit</span>
      <button onClick={resetMenu}>Générer de nouveaux produits</button>
    </div>
  );
}

const EmptyMenuAdminStyled = styled.div``;
