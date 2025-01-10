import styled from "styled-components";
import { theme } from "../../../../theme/index";

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
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background: blueviolet;
  width: 240px;
  height: 330px;
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr;

  .image {
    border: 1px solid blue;
    height: 150px;
    width: 100%;

    img {
      margin-top: 30px;
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
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
    display: flex;
    justify-content: space-around;
    border: 1px solid blue;
  }
`;
