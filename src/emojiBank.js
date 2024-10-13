import React, { useState } from "react";
import Draggable from "react-draggable";
import "./App.css";

const EmojiBank = () => {
  const emojiCodes = [
    { code: "\u{1F363}", label: "Sushi" },
    { code: "\u{1F354}", label: "Cheeseburger" },
    { code: "\u{1F369}", label: "Donut" },
    { code: "\u{1F957}", label: "Salad" },
    { code: "\u{1F959}", label: "Gyro" },
    { code: "\u{1F355}", label: "Pizza" },
    { code: "\u{1F35F}", label: "French Fries" },
    { code: "\u{1F32E}", label: "Taco" },
    { code: "\u{1F35C}", label: "Ramen" },
    { code: "\u{1F366}", label: "Ice Cream" },
    { code: "\u{1F32D}", label: "Hot Dog" },
    { code: "\u{1F32F}", label: "Burrito" },
    { code: "\u{1F95E}", label: "Pancakes" },
    { code: "\u{1F95F}", label: "Dumpling" },
    { code: "\u{1F96A}", label: "Sandwich" },
    { code: "\u{1F367}", label: "Shaved Ice" },
    { code: "\u{1F35B}", label: "Curry" },
    { code: "\u{1F35D}", label: "Spaghetti" },
    { code: "\u{1F36E}", label: "Flan" },
    { code: "\u{1F36A}", label: "Cookie" },
  ];
  const [isHovering, setIsHovering] = useState(null);
  return (
    <div className="bankColumn">
      <div className="bank">
        {emojiCodes.map((emoji, label) => (
          <Draggable key={emoji.label}>
            <div
              id="emoji"
              onMouseEnter={() => setIsHovering(emoji.label)}
              onMouseLeave={() => setIsHovering(null)}
            >
              {emoji.code}
              <div
                className="hoverLabel"
                style={{
                  visibility: isHovering === emoji.label ? "visible" : "hidden",
                  position: "absolute",
                  top: "10px",
                }}
              >
                {emoji.label}
              </div>
            </div>
          </Draggable>
        ))}
      </div>
      <button id="restart" onClick={() => window.location.reload()}>
        Click to Restart
      </button>
    </div>
  );
};

export default EmojiBank;
