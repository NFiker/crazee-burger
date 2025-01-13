import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import { GrUserAdmin } from "react-icons/gr";
import NavbarRightSideIncomplet from "./NavbarRightSideIncomplet";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";
import { theme } from "../../../../theme/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navlogin({ username }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const notify = () => {
    if (!isAdmin) {
      toast.info("Mode admin activé", {
        icon: <GrUserAdmin size={30} color={"#2B77AA"} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsAdmin(!isAdmin);
  };

  return (
    <NavLoginStyled>
      <ToggleButton
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
        onToggle={notify}
      />
      <ToastAdmin />
      <Profile username={username} />
    </NavLoginStyled>
  );
}

const NavLoginStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap: 40px;
`;
