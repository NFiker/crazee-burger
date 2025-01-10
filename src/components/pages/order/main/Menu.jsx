import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import { theme } from "../../../../theme/index";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Product from "./Product";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <SimpleBar>
      <MenuStyled>
        {menu.map((product) => {
          return (
            // <Product
            //   title={product.title}
            //   imageSource={product.imageSource}
            //   price={product.price}
            // />
            <Product {...product} />
          );
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
`;
