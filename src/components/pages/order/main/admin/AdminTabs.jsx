import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { theme } from "../../../../../theme/index";
import OrderPage from "../../OrderPage";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    // isAddSelected,
    // setIsAddSelected,
    // isEditSelected,
    // setIsEditSelected,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  // const selectTab = (tabSelected) => {
  //   setIsCollapsed(false);

  //   if (tabSelected === "add") {
  //     setIsAddSelected(true);
  //     setIsEditSelected(false);
  //   }
  //   if (tabSelected === "edit") {
  //     setIsEditSelected(true);
  //     setIsAddSelected(false);
  //   }
  // };

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    // setIsAddSelected(tabSelected === "add");
    // setIsEditSelected(tabSelected === "edit");
    setCurrentTabSelected(tabSelected);
  };

  const tabs = getTabsConfig(currentTabSelected);

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={handleClick}
        className={isCollapsed ? "is-active" : ""}
      />
      ;
      {tabs.map((tab) => (
        <Tab
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={tab.className}
        />
      ))}
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
