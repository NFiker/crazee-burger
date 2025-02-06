import styled from "styled-components";
import OrderContext from "../../context/OrderContext";
import { useContext, useState } from "react";
import { theme } from "../../theme";
import TextInput from "./TextInput.jsx";
import Button from "./Button.jsx";
import ImagePreview from "../pages/order/main/mainRightSide/menu/admin/adminPanel/ImagePreview.jsx";
import SubmitMessage from "../pages/order/main/mainRightSide/menu/admin/adminPanel/SubmitMessage.jsx";
import { getInputTextsConfig } from "../pages/order/main/mainRightSide/menu/admin/adminPanel/getInputTextsConfig.jsx";
import { EMPTY_PRODUCT } from "../../enums/product";
import React from "react";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, children }, ref) => {
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
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
        </div>
        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  }
);

export default Form;

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

  .form-footer {
    grid-area: submit-button;
    display: flex;
    align-items: center;
  }
`;
