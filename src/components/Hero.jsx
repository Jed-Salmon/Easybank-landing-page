import mainImage from "../images/image-mockups.png";
import desktopBg from "../images/bg-intro-desktop.svg";
import Button from "./Button";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="background-image">
          <img className="bgImgDesktop" src={desktopBg} alt="" />
          <div className="main-img">
            <img src={mainImage} alt="" />
          </div>
        </div>
        <div className="lead-text">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button>Request Invite</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
