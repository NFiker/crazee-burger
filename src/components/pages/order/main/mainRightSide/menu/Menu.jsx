import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import { formatPrice } from "../../../../../../utils/maths";
import { useContext } from "react";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Card from "../../../../../reusable-ui/Card";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductClicked } from "./helper";
import {
  EMPTY_PRODUCT,
  IMAGE_COMING_SOON,
} from "../../../../../../enums/product";
import { isEmpty } from "../../../../../../utils/array";

export default function Menu() {
  //State
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(OrderContext);

  //comportements

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
    handleDeleteBasketProduct(idProductToDelete);

    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    handleAddToBasket(idProductToAdd);
  };

  //Affichage
  if (isEmpty(menu)) {
    return isModeAdmin ? (
      <EmptyMenuAdmin onReset={resetMenu} />
    ) : (
      <EmptyMenuClient />
    );
  }

  return (
    <SimpleBar>
      <MenuStyled>
        {menu.map(({ id, title, imageSource, price }) => {
          return (
            <Card
              key={id}
              title={title}
              imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
              leftDescription={formatPrice(price)}
              hasDeleteButton={isModeAdmin}
              onDelete={(event) => handleCardDelete(event, id)}
              onClick={isModeAdmin ? () => handleProductSelected(id) : null}
              isHoverable={isModeAdmin}
              isSelected={checkIfProductClicked(id, productSelected.id)}
              onAdd={(event) => handleAddButton(event, id)}
            />
            // <Card {...card} /> non utilisable pour des reusable componenents
          );
        })}
      </MenuStyled>
    </SimpleBar>
  );
}

const MenuStyled = styled.div`
  height: 100%; //temporaire avant correction z-index
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
`;
