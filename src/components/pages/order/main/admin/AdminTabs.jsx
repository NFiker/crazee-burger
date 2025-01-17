import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../../theme/index";
import OrderPage from "../../OrderPage";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const selectAddTab = () => {
    setIsCollapsed(false);
    setIsAddSelected(true);
    setIsEditSelected(false);
  };

  const selectEditTab = () => {
    setIsCollapsed(false);
    setIsAddSelected(false);
    setIsEditSelected(true);
  };

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);

    if (tabSelected === "add") {
      setIsAddSelected(true);
      setIsEditSelected(false);
    }
    if (tabSelected === "edit") {
      setIsEditSelected(true);
      setIsAddSelected(false);
    }
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
        onClick={() => selectTab("add")}
        className={isAddSelected ? "is-active" : ""}
        label={"Ajouter un produit"}
      />
      <Tab
        Icon={<MdModeEditOutline />}
        onClick={() => selectTab("edit")}
        className={isEditSelected ? "is-active" : ""}
        label={"Modifier un produit"}
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
