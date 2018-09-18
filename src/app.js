import React, { Component } from "react";
import PropTypes from "prop-types";
//import GridContainer from "Components/GridContainer"
//import DraggableDiv from 'Components/DraggableDiv'
import Create from 'Pages/Create'
import "Stylesheets/app.css"

class App extends Component {

  render() {
    return (
      <Create style={{width:'100%',height:'100%'}}/>
    );
  }
}

App.proptypes = { label: PropTypes.string.isRequired }


export default App;