import 'babel-polyfill'
import React, {Component} from 'react'
import './reset.less'
import RouterApp from "./router.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        <RouterApp/>
      </div>
    )
  }
}