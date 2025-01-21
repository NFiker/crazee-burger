import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const newProduct = {
    id: new Date().getTime(),
    title: "Nouveau Produit",
    imageSource:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHRRH1CDl_ixjeRdebtFu9pth5PvDEaGwtg&s",
    price: 2.5,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(newProduct);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">image-preview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Prix" />
      </div>
      <button className="submit-button">submit-button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "image-preview   input-fields"
    "image-preview   input-fields"
    "image-preview   input-fields"
    ".               submit-button";

  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: image-preview;
  }

  .input-fields {
    background: green;
    grid-area: input-fields;

    display: grid;
  }

  .submit-button {
    background: blue;
    grid-area: submit-button;
    width: 50%;
  }
`;
