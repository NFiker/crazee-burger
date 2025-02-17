import styled from "styled-components";

export default function SelectInput({
  name,
  value,
  options,
  className,
  id,
  onChange,
  onFocus,
  onBlur,
}) {
  return (
    <SelectInputStyled
      name={name}
      value={value}
      className={className}
      id={id}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {options.map(({ value, label }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select`
  border: 1px solid red;
`;
