import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import currency from "../images/image-currency.jpg";
import confetti from "../images/image-confetti.jpg";
import "../styles/Article.scss";

const Articles = () => {
  return (
    <div className="articles container">
      <h2>Latest Articles</h2>
      <div className="articles-list">
        <div className="card">
          <div className="thumbnail">
            <img src={currency} alt="" />
          </div>
          <div className="details">
            <div className="article-author">By Claire Robinson</div>
            <div className="article-title">
              <h4>Receive money in any currency with no fees</h4>
            </div>
            <div className="preview-text">
              <p>
                The world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single ...
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="thumbnail">
            <img src={restaurant} alt="" />
          </div>
          <div className="details">
            <div className="article-author">By Wilson Hutton</div>
            <div className="article-title">
              <h4>Treat yourself without worrying about money</h4>
            </div>
            <div className="preview-text">
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="thumbnail">
            <img src={confetti} alt="" />
          </div>
          <div className="details">
            <div className="article-author">By Claire Robinson</div>
            <div className="article-title">
              <h4>Take your Easybank card wherever you go</h4>
            </div>
            <div className="preview-text">
              <p>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="thumbnail">
            <img src={plane} alt="" />
          </div>
          <div className="details">
            <div className="article-author">By Claire Robinson</div>
            <div className="article-title">
              <h4>Our invite-only Beta accounts are now live!</h4>
            </div>
            <div className="preview-text">
              <p>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
