//from frontside.io's @bigtest, mocha docs, and ->
//https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically

// mocha doesn't support es modules, so we import the pre-compiled assets
import 'mocha/mocha.js';
import 'mocha/mocha.css';
import { setupAppForTesting } from '@bigtest/react';
import React from "react"
import ReactDOM from "react-dom"
import App from '../src/app';

const Root = document.getElementById("root") 
Root? ReactDOM.render(<App label="myapp" />, Root) : false;

// we import our tests using webpack's require.context
// if we just use `import`, it will be hoisted above mocha's bdd setup
const requireTest = require.context('.', true, /-test/);
requireTest.keys().forEach(requireTest);

// run mocha
mocha.reporter('list').ui('tdd').run();

export { visit, location } from '@bigtest/react';

export function setupApplicationForTesting() {
  beforeEach(async function() {
    this.app = await setupAppForTesting(App);
  });
}
