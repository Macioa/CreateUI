import React, { Component } from "react";
import PropTypes from "prop-types";
import Style from "./assets/stylesheets/app.css"

class App extends Component {

  render() {
    return (
      <div id="app">
      My App
      </div>
    );
  }
}

App.proptypes = { label: PropTypes.string.isRequired }


export default App;