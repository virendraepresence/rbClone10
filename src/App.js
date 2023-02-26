import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Innovation from './components/Innovation';
import WhoWeAre from './components/WhoWeAre'
import WhatWeDo from './components/WhatWeDo';
import ProductsAndServices from './components/ProductsAndServices';
import NotFound from './components/NotFound';
import Safety from './components/Safety';
import Sustainability from './components/Sustainability';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UpperHeadNavbar from './components/UpperHeadNavbar';

const App = () => {


  return (
        <Router>
          <div className="App">
            
            <Navbar />
            <div className="content">
              <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/WhoWeAre">
                <WhoWeAre />
              </Route>
              <Route exact path="/WhatWeDo">
                <WhatWeDo />
              </Route>
              <Route exact path="/Innovation">
                <Innovation />
              </Route>
              <Route exact path="/Sustainability">
                <Sustainability />
              </Route>
              <Route exact path="/ProductsAndServices">
                <ProductsAndServices />
              </Route>
              <Route exact path="/Safety">
                <Safety />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>

              </Switch>
              
            </div>
          </div>
        </Router>
  )
}


export default App;

