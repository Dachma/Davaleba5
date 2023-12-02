import "./styles/app.css";
import pfp from "./images/pfp.jpg";
import like from "./images/like.jpg";
import dislike from "./images/dislike.png";
import share from "./images/share.png";
import more from "./images/more.png";

function App() {
  return (
    <div className="container">
      <iframe
        className="iframe"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="title">
        Rick Astley - Never Gonna Give You Up (Official Music Video)
      </div>
      <div className="footer">
        <div className="left-side">
          <img className="img" alt="pic" src={pfp} />
          <div className="channel-info">
            <div className="channel-name">Rick Astley</div>
            <div className="subscribers">3,95 მლნ. გამომწერი</div>
          </div>
          <button className="subscribe-button">გამოწერა</button>
        </div>
        <div className="right-side">
          <button className="like-button">
            <img className="img like-img" src={like} />
            <div className="like-count">17 მლნ.</div>
          </button>
          <div className="hr-container">
            <hr />
          </div>
          <button className="dislike-button">
            <img className="img like-img dislike-img" src={dislike} />
          </button>
          <button className="share-button">
            <img className="img like-img" src={share} />
            <div className="like-count">გაზიარება</div>
          </button>
          <button className="more-button">
            <img className="img like-img" src={more} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
