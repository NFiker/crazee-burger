import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import { theme } from "../../../../theme/index";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <SimpleBar>
      <MenuStyled>
        {menu.map((product) => {
          return <div className="product">{product.title}</div>;
        })}
      </MenuStyled>
    </SimpleBar>
  );
}

const MenuStyled = styled.div`
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
