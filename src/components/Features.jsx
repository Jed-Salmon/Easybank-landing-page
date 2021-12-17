import onlineIcon from "../images/icon-online.svg";
import budgetingIcon from "../images/icon-budgeting.svg";
import onboardingIcon from "../images/icon-onboarding.svg";
import apiIcon from "../images/icon-api.svg";
import "../styles/Features.scss";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="lead">
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="features-list">
          <div className="feature">
            <div className="feature-icon">
              <img src={onlineIcon} alt="" />
            </div>
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src={budgetingIcon} alt="" />
            </div>
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you're close to your hitting limits.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src={onboardingIcon} alt="" />
            </div>
            <h3>Fast Onboarding</h3>
            <p>
              We dont do branches. Open your account in minutes to start taking
              control of your finances right away.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src={apiIcon} alt="" />
            </div>
            <h3>Online Banking</h3>
            <p>
              Manage your savings, investments, pension and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
