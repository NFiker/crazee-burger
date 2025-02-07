import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";
import { deepClone, find, findIndex } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (productToAdd) => {
    // 1. Copie du state
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket = find(productToAdd.id, basketCopy);
    // console.log("isProductAlreadyInBasket", isProductAlreadyInBasket);

    // 2. Manip de la copie du state
    //    1er cas: produit non présent dans le basket
    if (!isProductAlreadyInBasket) {
      const newBasketProduct = {
        ...productToAdd,
        quantity: 1,
      };

      const basketUpdated = [newBasketProduct, ...basketCopy];

      // 3. update du state
      setBasket(basketUpdated);
      return;
    }

    //    2eme cas: produit présent dans le basket
    incrementProductAlreadyInBasket(productToAdd, basketCopy);
  };

  const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndex(
      productToAdd.id,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    // 3. update du state
    setBasket(basketCopy);
  };

  return { basket, handleAddToBasket };
};
