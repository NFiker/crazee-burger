import styled from "styled-components";
import { theme } from "../../../../theme/index";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function Product({ title, price, imageSource }) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="price">{price}</div>
          <div className="add-button">
            <PrimaryButton className="add-product" label="Ajouter" />
          </div>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};

  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  .title {
    padding-left: 1rem;
    font-family: ${theme.fonts.style.brandFont};
    font-size: ${theme.fonts.size.P4};
    font-family: ${theme.fonts.style.brandFont};
  }

  .info-text {
    border: 1px solid fuchsia;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .description {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
