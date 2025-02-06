import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {};
  //
  return { basket, handleAddToBasket };
};
