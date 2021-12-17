import { useState } from "react";
import Button from "./Button";
import Logo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import "../styles/Nav.scss";
import Modal from "./Modal";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const hideMenuHandler = () => {
    setMenuOpen(false);
  };

  const navLinks = (
    <div className="nav-links">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
    </div>
  );

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={Logo} alt="Easybank logo" />
          </div>
          {!menuOpen && navLinks}
          <div className="nav-btn">
            <Button>Request Invite</Button>
            <div className="mobile-menu">
              <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <img src={closeIcon} alt="" />
                ) : (
                  <img src={hamburgerIcon} alt="" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      {/* modal */}
      {menuOpen && <Modal hideMenu={hideMenuHandler}>{navLinks}</Modal>}
    </>
  );
};

export default Nav;
