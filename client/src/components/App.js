import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Banner from "./Banner";
import MenuCategories from './MenuCategories';


const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Banner}/>
        <Route exact path="/menu" component={MenuCategories}/>
      </div>
    </Router>
  )
};

export default App;
