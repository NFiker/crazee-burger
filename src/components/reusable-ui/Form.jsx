import styled from "styled-components";
import OrderContext from "../../context/OrderContext";
import { useContext, useState } from "react";
import { theme } from "../../theme";
import TextInput from "./TextInput.jsx";
import Button from "./Button.jsx";
import ImagePreview from "../pages/order/main/admin/adminPanel/ImagePreview.jsx";
import SubmitMessage from "../pages/order/main/admin/adminPanel/SubmitMessage.jsx";
import { getInputTextsConfig } from "../pages/order/main/admin/adminPanel/getInputTextsConfig.jsx";
import { EMPTY_PRODUCT } from "../../enums/product";

export default function Form({ product, onSubmit, onChange, isSubmitted }) {
  //State

  //Comportements

  const inputTexts = getInputTextsConfig(product);

  //Affichage
  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview title={product.title} imageSource={product.imageSource} />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            // name={input.name}
            // value={input.value}
            // placeholder={input.placeholder}
            // Icon={input.Icon}
            {...input}
            onChange={onChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label="Ajouter un produit au menu"
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
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
    grid-area: input-fields;
    display: grid;
    align-self: center;
    grid-row-gap: 5px;
  }

  .submit {
    grid-area: submit-button;
    display: flex;
    align-items: center;

    .submit-button {
      width: 50%;
      margin-top: 8px;
    }
  }
`;
