import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import { theme } from "../../../../theme/index";
import { formatPrice } from "../../../../utils/maths";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Card from "../../../reusable-ui/Card";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <SimpleBar>
      <MenuStyled>
        {menu.map(({ id, title, imageSource, price }) => {
          return (
            <Card
              key={id}
              title={title}
              imageSource={imageSource}
              leftDescription={formatPrice(price)}
            />
            // <Card {...card} /> non utilisable pour des reusable componenents
          );
        })}
      </MenuStyled>
    </SimpleBar>
  );
}

const MenuStyled = styled.div`
  border: 3px solid blue;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0 0 20px 8 rgba(0, 0, 0, 0.2) inset;
`;
