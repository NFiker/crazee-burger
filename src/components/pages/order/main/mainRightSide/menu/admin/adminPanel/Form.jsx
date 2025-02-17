import styled from "styled-components";
import React, { forwardRef } from "react";
import { theme } from "../../../../../../../../theme/index.js";
import TextInput from "../../../../../../../reusable-ui/TextInput.jsx";
import Button from "../../../../../../../reusable-ui/Button.jsx";
import ImagePreview from "./ImagePreview.jsx";
import SubmitMessage from "./SubmitMessage.jsx";
import {
  getInputSelectsConfig,
  getInputTextsConfig,
} from "./getInputConfig.jsx";
import { EMPTY_PRODUCT } from "../../../../../../../../enums/product.js";
import SelectInput from "../../../../../../../reusable-ui/SelectInput.jsx";

const isAvailableOptions = [
  { value: true, label: "En stock" },
  { value: false, label: "En rupture" },
];

const isPublicisedOptions = [
  { value: true, label: "Avec pub" },
  { value: false, label: "Sans pub" },
];

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, onFocus, onBlur, children }, ref) => {
    //State (vide)

    //Comportements (vide)
    const inputTexts = getInputTextsConfig(product);
    const inputSelects = getInputSelectsConfig(product);

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
              onFocus={onFocus}
              onBlur={onBlur}
              version="minimalist"
              className={input.className}
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
          {inputSelects.map((inputSelect) => (
            <SelectInput
              key={inputSelect.id}
              {...inputSelect}
              onChange={onChange}
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

  .title {
    grid-column: span 3;
  }

  .image-source {
    grid-column: span 3;
  }

  .input-fields {
    grid-area: input-fields;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    align-self: center;
    grid-gap: 8px;
    grid-auto-flow: dense; /* Place intelligemment les éléments */

    /* .title {
      grid-area: title;
    }
    .image-source {
      grid-area: image-source;
    }
    .price {
      grid-area: price;
    }
    .is-available {
      grid-area: is-available;
    }
    .is-publicised {
      grid-area: is-publicised;
    } */

    /* grid-template-areas:
      "title   title   title"
      "image-source   image-source   image-source"
      "price   is-available   is-publicised"; */
  }

  .form-footer {
    grid-area: submit-button;
    display: flex;
    align-items: center;
  }
`;
