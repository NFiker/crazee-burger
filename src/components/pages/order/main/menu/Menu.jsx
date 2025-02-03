import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { formatPrice } from "../../../../../utils/maths";
import { useContext } from "react";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Card from "../../../../reusable-ui/Card";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductClicked } from "./helper";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  //State
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
  } = useContext(OrderContext);

  //comportements
  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return;
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");

    const productClickedOn = menu.find(
      (product) => product.id === idProductClicked
    );
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  //Affichage
  if (menu.length === 0) {
    return isModeAdmin ? (
      <EmptyMenuAdmin onReset={resetMenu} />
    ) : (
      <EmptyMenuClient />
    );
  }

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();

    // Vérifie si le produit supprimé est celui actuellement sélectionné
    const isDeletedProductSelected = productSelected?.id === idProductToDelete;

    handleDelete(idProductToDelete);

    // Si le produit supprimé n'était pas celui sélectionné, on garde le focus
    if (!isDeletedProductSelected) {
      titleEditRef.current.focus();
    } else {
      setProductSelected(EMPTY_PRODUCT); // Réinitialise le produit sélectionné
    }
  };

  return (
    <SimpleBar>
      <MenuStyled>
        {menu.map(({ id, title, imageSource, price }) => {
          return (
            <Card
              key={id}
              title={title}
              imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
              leftDescription={formatPrice(price)}
              hasDeleteButton={isModeAdmin}
              onDelete={(event) => handleCardDelete(event, id)}
              onClick={() => handleClick(id)}
              isHoverable={isModeAdmin}
              isSelected={checkIfProductClicked(id, productSelected.id)}
            />
            // <Card {...card} /> non utilisable pour des reusable componenents
          );
        })}
      </MenuStyled>
    </SimpleBar>
  );
}

const MenuStyled = styled.div`
  height: 100vh; //temporaire avant correction z-index
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
`;
