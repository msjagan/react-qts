import React from 'react';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Test from './pages/Test';
import NavBar from './NavBar';
function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" component={HomePage} exact/>  
        <Route path="/test" component={Test} exact/>  
      </Switch>
    </Router>
  );
}

export default App;
