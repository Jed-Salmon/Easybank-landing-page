import { createPortal } from "react-dom";
import "../styles/Modal.scss";

const Backdrop = ({ hideMenu }) => {
  return <div className="backdrop" onClick={hideMenu}></div>;
};

const Overlay = ({ children }) => {
  return (
    <div className="modal">
      <div className="content">{children}</div>
    </div>
  );
};

const Modal = ({ children, hideMenu }) => {
  return (
    <>
      {createPortal(
        <Backdrop hideMenu={hideMenu} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <Overlay>{children}</Overlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
