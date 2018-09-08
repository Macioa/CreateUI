import App from "./app"
import React from "react"
import ReactDOM from "react-dom"
const Root = document.getElementById("root") 
Root? ReactDOM.render(<App label="myapp" />, Root) : false;
