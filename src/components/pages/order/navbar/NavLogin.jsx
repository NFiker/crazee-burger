import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrUserAdmin } from "react-icons/gr";
import NavbarRightSideIncomplet from "./NavbarRightSideIncomplet";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { theme } from "../../../../theme/index";

export default function Navlogin({ username }) {
  const notify = () =>
    toast.info("Mode admin activé", {
      icon: <GrUserAdmin size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <NavLoginStyled>
      <ToggleButton
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
        onToggle={notify}
      />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <Profile username={username} />
    </NavLoginStyled>
  );
}

const NavLoginStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  gap: 40px;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
