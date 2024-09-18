/* remember that a react component is a reusable piece of code. */

//we want this to be code that can be used on each emoji that will be used on the tier list to make it draggable to a tier
// i think that this will be a class component since there is no input
//so we will have to render these

import React from "react";
import Draggable from "react-draggable";
import "./App.css";

const DraggableEmoji = () => {
  const emojiCodes = [
    "\u{1F363}",
    "\u{1F354}",
    "\u{1F369}",
    "\u{1F957}",
    "\u{1F959}",
    "\u{1F355}",
    "\u{1F35F}",
    "\u{1F32E}",
    "\u{1F35C}",
    "\u{1F366}",
  ];

  return (
    <div className="wrapper">
      <div className="rankColumn">
        <div className="sTier">S</div>
        <div className="aTier">A</div>
        <div className="bTier">B</div>
        <div className="cTier">C</div>
        <div className="dTier">D</div>
        <div className="fTier">F</div>
      </div>
      <div className="rankSpaceColumn">
        <div className="rankSpace"></div>
        <div className="rankSpace"></div>
        <div className="rankSpace"></div>
        <div className="rankSpace"></div>
        <div className="rankSpace"></div>
        <div className="rankSpace"></div>
      </div>
      <div className="bankColumn">
        <div className="bank">
          {emojiCodes.map((emoji, index) => (
            <Draggable key={index}>
              <div id="emoji">{emoji}</div>
            </Draggable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DraggableEmoji;
