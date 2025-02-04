import styled from "styled-components";
import Main from "./main/Main";
import { theme } from "../../../theme/index";
import { useState } from "react";
import Navbar from "./navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "./main/admin/adminPanel/AddForm";

export default function OrderPage() {
  //State
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  //Comportements
  const handleAdd = (newProduct) => {
    // 1. Copie du tableau
    const menuCopy = [...menu];
    // 2. Manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];
    // 3. Update du state
    setMenu(menuUpdated);
  };

  const handleDelete = (productIdDelete) => {
    // 1. Copie du tableau
    const menuCopy = [...menu];
    // 2. Manip de la copie du tableau
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== productIdDelete
    );
    // 3. Update du state
    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
  };

  //Affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.primary};

  .container {
    height: 95vh;
    margin: 0 1rem;
    width: 1000px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
