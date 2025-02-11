import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";
import { syncBothMenus } from "../api/product";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  //Comportements
  const handleAdd = (newProduct, username) => {
    // 1. Copie du tableau
    const menuCopy = [...menu];
    // 2. Manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];
    // 3. Update du state
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleDelete = (productIdDelete) => {
    // 1. Copie du tableau
    const menuCopy = deepClone(menu);
    // 2. Manip de la copie du tableau
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== productIdDelete
    );
    // 3. Update du state
    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    // 1. Copie du tableau
    const menuCopy = deepClone(menu);

    // 2. Manip de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    );
    menuCopy[indexOfProductToEdit] = productBeingEdited;

    // 3. Update du state
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu };
};
