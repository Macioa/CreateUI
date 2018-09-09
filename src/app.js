import React, { Component } from "react";
import PropTypes from "prop-types";
import GridContainer from "./GridContainer/GridContainer"
import DraggableDiv from './assets/components/DraggableDiv/DraggableDiv.js'
import "./assets/stylesheets/app.css"

class App extends Component {

  render() {
    return (
      <div id="app">
      My App
      <GridContainer size={8} style={{width:'500px',height:'500px'}}/>
      <DraggableDiv style={{width:'25px',height:'25px',backgroundColor:'red'}}/>
      </div>
    );
  }
}

App.proptypes = { label: PropTypes.string.isRequired }


export default App;