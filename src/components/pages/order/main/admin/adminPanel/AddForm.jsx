import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../../theme/index";
import TextInput from "../../../../../reusable-ui/TextInput";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";

export default function AddForm() {
  //State
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);

  // const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //Comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value }); //[] Dynamic Property Name
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  //Affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        title={newProduct.title}
        imageSource={newProduct.imageSource}
      />
      <div className="input-fields">
        <TextInput
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          onChange={handleChange}
          Icon={<FaHamburger />}
          version="minimalist"
        />
        <TextInput
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          onChange={handleChange}
          Icon={<BsFillCameraFill />}
          version="minimalist"
        />
        <TextInput
          name="price"
          value={newProduct.price}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
          Icon={<MdOutlineEuro />}
          version="minimalist"
        />
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label="Ajouter un produit au menu"
          version="success"
        />
        {isSubmitted && (
          <span className="submit-message">
            <FiCheck className="icon" /> Ajouté avec succès !
          </span>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  /* border: 2px solid black; */
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
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: green; */
    grid-area: input-fields;

    display: grid;
    align-self: center;
    grid-row-gap: 5px;
  }

  .submit {
    /* background: blue; */
    grid-area: submit-button;
    display: flex;
    align-items: center;

    .submit-button {
      width: 50%;
      margin-top: 8px;
    }

    .submit-message {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.success};
      margin-left: 5px;
      font-size: ${theme.fonts.size.P0};

      .icon {
        margin: 0 10px;
        width: 1em;
        height: 1em;
        border: 1px solid ${theme.colors.success};
        border-radius: ${theme.borderRadius.extraRound};
        vertical-align: middle;
      }
    }
  }
`;
