import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { useState } from "react";

const EMPTY_PRODUCT = {
  id: "",
  title: "Nouveau produit",
  imageSource: "",
  price: 1,
};

export default function AddForm() {
  //State
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  // const newProduct = {
  //   id: new Date().getTime(),
  //   title: "Nouveau Produit",
  //   imageSource:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHRRH1CDl_ixjeRdebtFu9pth5PvDEaGwtg&s",
  //   price: 2.5,
  // };

  //Comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(newProductToAdd);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  //Affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">image-preview</div>
      <div className="input-fields">
        <input
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom"
          onChange={handleChange}
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          name="price"
          value={newProduct.price}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
        />
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
