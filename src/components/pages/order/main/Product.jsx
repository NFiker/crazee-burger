import styled from "styled-components";
import { theme } from "../../../../theme/index";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../utils/maths";

export default function Product({ title, price, imageSource }) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{formatPrice(price)}</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label="Ajouter" />
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};

  /* * {
    border: 1px solid red;
  } */

  .image {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .title {
    font-family: ${theme.fonts.style.brandFont};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
    color: ${theme.colors.dark};
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .text-info {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* padding-top: 10px; */

    .description {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .left-description {
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.primary};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .primary-button {
          padding: 10px 20px;
        }
      }
    }
  }
`;
