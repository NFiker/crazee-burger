import { theme } from "../../../../theme";
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { GrUserAdmin } from "react-icons/gr";

export default function NavbarRightSideIncomplet() {
  return (
    <NavbarRightSideIncompletStyled>
      <ToggleButton
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
        onToggle={notify}
      />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavbarRightSideIncompletStyled>
  );
}

const NavbarRightSideIncompletStyled = styled.div`
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
