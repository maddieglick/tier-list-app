/* remember that a react component is a reusable piece of code. */

//we want this to be code that can be used on each emoji that will be used on the tier list to make it draggable to a tier
// i think that this will be a class component since there is no input
//so we will have to render these

import React from "react";
import Draggable from "react-draggable";
import "./App.css";

const DraggableEmoji = () => {
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
          <Draggable>
            <div id="emoji">{"\u{1F363}"}</div>
          </Draggable>
          <Draggable>
            <div id="emoji">{"\u{1F354}"}</div>
          </Draggable>
          <Draggable>
            <div id="emoji">{"\u{1F369}"}</div>
          </Draggable>
          <Draggable>
            <div id="emoji">{"\u{1F957}"}</div>
          </Draggable>
          <Draggable>
            <div id="emoji">{"\u{1F959}"}</div>
          </Draggable>
          <Draggable>
            <div id="emoji">{"\u{1F355}"}</div>
          </Draggable>
          <Draggable>
            <div id="emoji">{"\u{1F35F}"}</div>
          </Draggable>
          <Draggable>
            <div id="emoji">{"\u{1F32E}"}</div>
          </Draggable>
          <Draggable>
            <div id="emoji">{"\u{1F35C}"}</div>
          </Draggable>
          <Draggable>
            <div id="emoji">{"\u{1F366}"}</div>
          </Draggable>
        </div>
      </div>
    </div>
  );
};

export default DraggableEmoji;
