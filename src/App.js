import React, { Component } from 'react';
import './App.css';
import {Router, Route, browserHistory} from 'react-router';
import Landing from './views/landing';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/home' component={Landing}/>
      </Router>
    );
  }
}

export default App;
