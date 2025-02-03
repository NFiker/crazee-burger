// import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { getInputTextsConfig } from "./getInputTextsConfig.jsx";
import styled from "styled-components";
import ImagePreview from "./ImagePreview.jsx";
import TextInput from "../../../../../reusable-ui/TextInput.jsx";
import { theme } from "../../../../../../theme";
import EditInfoMessage from "./EditInfoMessage";

export default function EditForm() {
  // State
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);
  const inputTexts = getInputTextsConfig(productSelected);

  // Comportements
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
    // setNewProduct(EMPTY_PRODUCT);
    // displaySuccessMessage();
  };

  // Affichage
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
            ref={input.name === "title" ? titleEditRef : null}
          />
        ))}
      </div>
      {/* <HintMessage /> */}
      <div className="submit">
        <EditInfoMessage />
      </div>
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
    position: relative;
    top: 3px;
  }
`;
