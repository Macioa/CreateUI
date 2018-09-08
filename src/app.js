import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class App extends Component {

  render() {
    return (
      <div id="app">
      My App
      </div>
    );
  }
}

App.PropTypes = { label: PropTypes.string.isRequired }


document.getElementById("root") ? ReactDOM.render(<App label="myapp" />, wrapper) : false;

export default App;