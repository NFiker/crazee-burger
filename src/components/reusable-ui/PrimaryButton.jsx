import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: 13px;
  font-weight: ${theme.fonts.weights.semiBold};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary_burger};
  border: 1px solid ${theme.colors.primary_burger};

  &:hover:not(:disabled) {
    background-color: white;
    color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
    transition: all 0.2s ease-out;
  }

  &:active {
    color: white;
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
