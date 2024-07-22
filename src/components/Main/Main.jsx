import React, { useContext, useState, useEffect } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../Context/Context";

const Main = () => {
  const {
    onSubmit,
    recentPrompt,
    showResult,
    loading,
    result,
    setInput,
    input,
  } = useContext(Context);

  const [cardClicked, setCardClicked] = useState(false);

  const handleCardClick = (text) => {
    setInput(text);
    setCardClicked(true);
  };

  useEffect(() => {
    if (cardClicked) {
      onSubmit();
      setCardClicked(false);
    }
  }, [input, cardClicked, onSubmit]);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today? </p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Help me understand American football")
                }
              >
                <p>Help me understand American football</p>
                <img src={assets.compass_icon} alt="compass" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "Plan a low-carb meal with what's available in my fridge"
                  )
                }
              >
                <p>Plan a low-carb meal with what's available in my fridge</p>
                <img src={assets.bulb_icon} alt="bulb" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Come up with a product name for a new app")
                }
              >
                <p>Come up with a product name for a new app</p>
                <img src={assets.message_icon} alt="message" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "Look up a Linux shell command for a specific task"
                  )
                }
              >
                <p>Look up a Linux shell command for a specific task</p>
                <img src={assets.code_icon} alt="code" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: result }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              {input ? (
                <img
                  onClick={() => onSubmit()}
                  src={assets.send_icon}
                  alt="send"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
