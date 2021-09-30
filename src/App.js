import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Container, Segment } from 'semantic-ui-react';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/'>
               <Home />
            </Route>
            <Route exact path='/products'>
               <Products />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
