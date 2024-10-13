/* remember that a react component is a reusable piece of code. */

//we want this to be code that can be used on each emoji that will be used on the tier list to make it draggable to a tier
// i think that this will be a class component since there is no input
//so we will have to render these

import React from "react";
// import Draggable from "react-draggable";
import "./App.css";
import EmojiBank from "./emojiBank";

const blanks = new Array(6).fill(null);
const TierList = () => {
  return (
    <div className="wrapper">
      <div className="rankColumn">
        <div className="sTier tierBase">S</div>
        <div className="aTier tierBase">A</div>
        <div className="bTier tierBase">B</div>
        <div className="cTier tierBase">C</div>
        <div className="dTier tierBase">D</div>
        <div className="fTier tierBase">F</div>
      </div>
      <div className="rankSpaceColumn">
        {blanks.map((blank, index) => (
          <div className="rankSpace" key={index}>
            {blank}
          </div>
        ))}
      </div>
      <EmojiBank />
    </div>
  );
};

export default TierList;
