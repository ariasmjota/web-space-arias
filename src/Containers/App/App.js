import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Main from '../Main/Main';
import Result from '../Result/Result';
import Login from '../Login/Login';


function App() {
  return (
   
    <Router>
      <Route path="/" exact component={Login}/>
      <Route path="/game" exact component={Main}/>
      <Route path="/gallery" exact component={Result}/>
    </Router>

  );
}

export default App;
