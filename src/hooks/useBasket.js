import { fakeBasket } from "../fakeData/fakeBasket";
import { useState } from "react";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.LARGE_WEIRD);
  return { basket };
};
