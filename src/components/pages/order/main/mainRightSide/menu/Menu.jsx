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
  IMAGE_NO_STOCK,
} from "../../../../../../enums/product";
import { isEmpty } from "../../../../../../utils/array";
import Loader from "./Loader";
import { menuAnimation } from "../../../../../../theme/animations";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Menu() {
  //State
  const {
    username,
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
    handleDelete(idProductToDelete, username);
    handleDeleteBasketProduct(idProductToDelete, username);

    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    handleAddToBasket(idProductToAdd, username);
  };

  //Affichage
  if (menu === undefined) return <Loader />;

  if (isEmpty(menu)) {
    return isModeAdmin ? (
      <EmptyMenuAdmin onReset={() => resetMenu(username)} />
    ) : (
      <EmptyMenuClient />
    );
  }

  return (
    <SimpleBar>
      <TransitionGroup component={MenuStyled} className="menu">
        {menu.map(({ id, title, imageSource, price }) => {
          return (
            <CSSTransition classNames="menu-animation" key={id} timeout={500}>
              <Card
                title={title}
                imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
                leftDescription={formatPrice(price)}
                hasDeleteButton={isModeAdmin}
                onDelete={(event) => handleCardDelete(event, id)}
                onClick={isModeAdmin ? () => handleProductSelected(id) : null}
                isHoverable={isModeAdmin}
                isSelected={checkIfProductClicked(id, productSelected.id)}
                onAdd={(event) => handleAddButton(event, id)}
                overlapImageSource={IMAGE_NO_STOCK}
                isOverlapImageVisible={true}
              />
            </CSSTransition>
            // <Card {...card} /> non utilisable pour des reusable componenents
          );
        })}
      </TransitionGroup>
    </SimpleBar>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  min-height: 85vh;
  height: 100%; //temporaire avant correction z-index: ;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  /* overflow-y: scroll; */

  ${menuAnimation}
`;
