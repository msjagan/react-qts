import React from 'react';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SingleQuote from './pages/SingleQuote';
import NavBar from './NavBar';
function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" component={HomePage} exact/>  
        <Route path="/quotedetail" component={SingleQuote} exact/>  
      </Switch>
    </Router>
  );
}

export default App;
