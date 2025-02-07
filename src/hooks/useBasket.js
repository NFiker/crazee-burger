import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";
import { deepClone, find } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (productToAdd) => {
    // 1. Copie du state
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket = find(productToAdd.id, basketCopy);
    console.log("isProductAlreadyInBasket", isProductAlreadyInBasket);

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
    }

    //    2eme cas: produit présent dans le basket

    return;
  };
  return { basket, handleAddToBasket };
};
