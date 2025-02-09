import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { isEmpty, findObjectById } from "../../../../../utils/array";
import { formatPrice } from "../../../../../utils/maths";
import { BasketStyled } from "./Basket";
import BasketProducts from "./BasketProducts";
import EmptyBasket from "./EmptyBasket";
import Footer from "./Footer";
import Total from "./Total";

export default function Basket() {
  const { basket, menu } = useContext(OrderContext);

  const isBasketEmpty = isEmpty(basket);

  const sumToPay = basket.reduce((total, basketProduct) => {
    const menuProduct = findObjectById(basketProduct.id, menu);
    total += menuProduct.price * basketProduct.quantity;
    return total;
  }, 0);

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(sumToPay)} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}
      <Footer />
    </BasketStyled>
  );
}
