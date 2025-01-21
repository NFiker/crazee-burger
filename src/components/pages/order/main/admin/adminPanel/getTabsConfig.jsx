import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { GiEternalLove } from "react-icons/gi";
import { BiSun } from "react-icons/bi";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

export const getTabsConfig = (currentTabSelected) => [
  // {
  //   index: "chevronUpDown",
  //   label: "",
  //   Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
  //   onClick: handleClick,
  //   className: isCollapsed ? "is-active" : "",
  // },

  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,

    // className: currentTabSelected === "add" ? "is-active" : "",
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: <EditForm />,
    // className: currentTabSelected === "edit" ? "is-active" : "",
  },
  {
    index: "theme",
    label: "Changer thème",
    Icon: <BiSun />,
    // className: currentTabSelected === "edit" ? "is-active" : "",
  },
  {
    index: "babe",
    label: "Onglet de l'amouuur ",
    Icon: <GiEternalLove />,
    // className: currentTabSelected === "edit" ? "is-active" : "",
  },
];

export const getTabsSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
