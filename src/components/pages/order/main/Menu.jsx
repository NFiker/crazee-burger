import styled from "styled-components";
import { theme } from "../../../../theme/index";
import { formatPrice } from "../../../../utils/maths";
import { useContext } from "react";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Card from "../../../reusable-ui/Card";
import OrderContext from "../../../../context/OrderContext";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const { menu } = useContext(OrderContext);

  return (
    <SimpleBar>
      <MenuStyled>
        {menu.map(({ id, title, imageSource, price }) => {
          return (
            <Card
              key={id}
              title={title}
              imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
`;
