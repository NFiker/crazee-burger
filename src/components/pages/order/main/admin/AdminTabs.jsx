import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { theme } from "../../../../../theme/index";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={handleClick}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        Icon={<AiOutlinePlus />}
        onClick={handleClick}
        className={isCollapsed ? "is-active" : ""}
        label={"Ajouter un produit"}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
