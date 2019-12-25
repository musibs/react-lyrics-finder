import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider } from './Context';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Provider>
    <Router>
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </div>
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
