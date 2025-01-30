import styled from "styled-components";
import { theme } from "../../theme/index";
import Button from "./Button";
import { formatPrice } from "../../utils/maths";
import { TiDelete } from "react-icons/ti";
import { css } from "styled-components";

export default function Card({
  imageSource,
  title,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onClick,
  isHoverable,
}) {
  return (
    <CardStyled onClick={onClick} $isHoverable={isHoverable}>
      <div className="card">
        {hasDeleteButton && (
          <button
            className="delete-button"
            aria-label="delete-button"
            onClick={onDelete}
          >
            <TiDelete className="icon" />
          </button>
        )}

        <div className="image">
          <img src={imageSource} alt={title} />
        </div>
        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{leftDescription}</div>
            <div className="right-description">
              <Button className="primary-button" label="Ajouter" />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  ${(props) => props.$isHoverable && hoverableStyle}

  .card {
    background: ${theme.colors.white};
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* display: grid; */
    /* grid-template-rows: 65% 1fr; */
    padding: 20px;
    /* padding-bottom: 10px; */
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};
    position: relative;

    .delete-button {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: ${theme.colors.primary};
      z-index: 2;
      padding: 0;
      border: none;
      background: none;

      .icon {
        height: 100%;
        width: 100%;
      }

      &:hover {
        color: ${theme.colors.red};
        transform: scale(2);
        transition: 0.2s ease-in-out;
      }

      &:active {
        color: ${theme.colors.primary};
        transition: none;
      }
    }

    .image {
      width: 100%;
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 160px;
        height: 130px;
        object-fit: contain;
      }
    }

    .title {
      font-family: ${theme.fonts.style.brandFont};
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weight.semiBold};
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
          font-weight: ${theme.fonts.weight.bold};
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
  }
`;

const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: ease-out 0.4s;
    box-shadow: ${theme.shadows.orangeHighlight};
    border-radius: ${theme.borderRadius.extraRound};
    cursor: pointer;
  }
`;
