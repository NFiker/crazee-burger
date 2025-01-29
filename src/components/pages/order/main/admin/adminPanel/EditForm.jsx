import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { getInputTextsConfig } from "./getInputTextsConfig.jsx";
import styled from "styled-components";
import ImagePreview from "./ImagePreview.jsx";
import { useState } from "react";
import TextInput from "../../../../../reusable-ui/TextInput.jsx";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function EditForm() {
  const { productSelected } = useContext(OrderContext);
  const [productBeingEdited, setProductBeingEdited] = useState(EMPTY_PRODUCT);

  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductBeingEdited({ ...productBeingEdited, [name]: value });
  };

  return (
    <EditFormStyled>
      <ImagePreview
        title={productSelected.title}
        imageSource={productSelected.imageSource}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            // name={input.name}
            // value={input.value}
            // placeholder={input.placeholder}
            // Icon={input.Icon}
            {...input}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <HintMessage />
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
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
