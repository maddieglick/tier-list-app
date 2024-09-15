//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";

//import Draggable from "react-draggable"; //this is dull bc we arent using it yet but we will
import DraggableEmoji from "./dragItems";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

function MyApp() {
  return (
    <div>
      <h1>Welcome to Food Rankings</h1>
      <p>
        S-tier is food of the gods, 5 stars, deserving of an amazing yelp
        review. F-tier is a disgrace to mankind and shouldn't exist, deserving
        of a yelp review that could ruin a restaurant's entire reputation. Drag
        and drop to rank.
      </p>
      <div>
        <DraggableEmoji />
      </div>
    </div>
  );
}

/*function MakeDraggable() {
  return (
    <div>
      <Draggable>document.getElementById("emoji");</Draggable>
    </div>
  );
}
*/
export default MyApp;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);

//function TierList() {}

//title: rank your fave foods
/*when you first come to the page or when you reset the ranking, cue an alert "welcome/ drag and drop the foods to rank them. S
is god tier, F is a disgrace to mankind and shouldnt exist. "*/

//classic tier list layout
//bank of emojis at the bottom, maybe 5 to start maybe even less
//when you hover over an emojij it will give its description
//somehow have to establish boundaries between levels ie cant place on the line has to default to certain region of the box
//use css grid to make the tier list layout
