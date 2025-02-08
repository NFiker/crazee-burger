import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";
import {
  deepClone,
  findObjectById,
  findIndexById,
  removeObjectById,
} from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (idProductToAdd) => {
    const basketCopy = deepClone(basket);

    const ProductAlreadyInBasket = findObjectById(idProductToAdd, basketCopy);

    //    1er cas: produit non présent dans le basket => on l'ajoute
    if (!ProductAlreadyInBasket) {
      createNewBasketProduct(idProductToAdd, basketCopy, setBasket);
      return;
    }
    //    2eme cas: produit présent dans le basket => on l'incrémente
    incrementProductAlreadyInBasket(idProductToAdd, basketCopy);
  };

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexById(
      idProductToAdd,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
  };

  const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
    const newBasketProduct = {
      id: idProductToAdd,
      quantity: 1,
    };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
  };

  const handleDeleteBasketProduct = (idBasketProduct) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket);
    setBasket(basketUpdated);
  };

  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};
