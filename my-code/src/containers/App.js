// @flow
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Main from "./Main"
import Detail from "./Detail"
import NotFound from "../components/NotFound"
import TopBar from "../layout/topbar"

import { Flex } from "../layout/Layout"

const App = () => (
  <BrowserRouter>
    <Flex>
      <Route path="/" component={TopBar} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/movie/:id" component={Detail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Flex>
  </BrowserRouter>
)

export default App
