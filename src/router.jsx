import React, {Component} from 'react'
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom'
import Index from './Components/index/index.jsx'
import Article from "./Components/article/article.jsx";

export default class RouterApp extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route component={Article} path='/article'/>
            <Index component={Index}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}