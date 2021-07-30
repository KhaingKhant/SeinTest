import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Nav from './Features/navBar'
import Home from './Pages/Home/container/Home'
import Product from './Pages/Products/container/Product'
const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/product" component={Product} />
        {/* <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} /> */}
      </Switch>
    </div >
  );
}

export default App;
