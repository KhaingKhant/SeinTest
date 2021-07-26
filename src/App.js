import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Nav from './commonComponents/navBar'
const App = () => {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
