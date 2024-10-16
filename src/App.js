import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import TierList from "./rankHere";

function MyApp() {
  return (
    <div>
      <h1 id="intro">Welcome to Food Rankings</h1>
      <p id="description">
        S-tier is food of the gods, 5 stars, deserving of an amazing yelp
        review. F-tier is a disgrace to mankind and shouldn't exist, deserving
        of a yelp review that could ruin a restaurant's entire reputation.
      </p>
      <p id="description">Drag and drop to rank.</p>
      <div>
        <TierList />
      </div>
      {/* <button id="restartButton" onClick={() => window.location.reload()}>
        Click to Restart
      </button> */}
    </div>
  );
}

export default MyApp;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);
