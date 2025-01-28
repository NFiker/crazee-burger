import styled from "styled-components";
import { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} $version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: ${theme.colors.background_white};

  .icon {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    font-size: ${theme.fonts.size.SM};
    margin-left: 10px;
    margin-right: ${theme.spacing.xs};
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    background: ${theme.colors.background_white};

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  /* ${(props) => {
    if (props.$version === "normal") return extraStyleNormal;

    if (props.$version === "minimalist") return extraStyleMinimalist;
  }}; */

  ${({ version }) => extraStyle[version]}//Dynamic Name Property
`;

const extraStyleNormal = css`
  background: ${theme.colors.white};
  padding: 18 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const extraStyleMinimalist = css`
  background: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};
  }

  input:focus {
    outline: none;
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};
