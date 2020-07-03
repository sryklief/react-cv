import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigationbar } from './components/Navigationbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';
import { Contact } from './components/Contact';

const App = () =>  {
  return(
    <div>
        <React.Fragment>
  <Router>
    <Navigationbar />
    <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="../contact" component={Contact} />
  <Route component={NoMatch} />
</Switch>
  </Router>
</React.Fragment>
    </div>
  )
}

export default App;
