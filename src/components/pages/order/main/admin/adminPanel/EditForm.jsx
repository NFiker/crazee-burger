import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";

export default function EditForm() {
  const { productSelected } = useContext(OrderContext);
  return (
    <div>
      <HintMessage />
      <span>{productSelected && productSelected.title}</span>
    </div>
  );
}
