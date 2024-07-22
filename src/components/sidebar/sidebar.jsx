import React, { useContext, useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../Context/Context";

const sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { onSubmit, previousPrompt, setRecentPrompt, newChat } =
    useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSubmit(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setIsOpen((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="menu"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="plus" />
          {isOpen ? <p>New Chat</p> : null}
        </div>
        {isOpen ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="massage" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question" />
          {isOpen ? <p>help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history" />
          {isOpen ? <p>activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting" />
          {isOpen ? <p>settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
