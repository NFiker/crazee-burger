import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((product) => {
        return <div className="product">{product.title}</div>;
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: purple;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;

  .product {
    background: blueviolet;
    width: 240px;
    height: 330px;
  }
`;
