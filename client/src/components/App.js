import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Home";
import MenuCategories from './MenuCategories';
import Menu from './Menu';


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/menu" component={MenuCategories}/>
        <Route path="/menu/:category" component={Menu} />
      </div>
    </Router>
  )
};

export default App;
