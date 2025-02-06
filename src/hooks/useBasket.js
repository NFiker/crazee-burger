import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);
  return { basket };
};
