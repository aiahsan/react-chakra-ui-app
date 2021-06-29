import * as React from "react"
import {
  ChakraProvider,
 
} from "@chakra-ui/react";
import './style/style.css'

import theme from './themes/AppTheme'
import Home from './pages/home'
import Jupyter from './pages/jupytar'
import Pricing from './pages/pricing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export const App = () => (
  <ChakraProvider theme={theme}>
      <Router>
    <Switch>
    <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/jupyter">
            <Jupyter />
          </Route>
          <Route path="/price">
            <Pricing />
          </Route>
      </Switch>
      </Router>
    </ChakraProvider>
)
