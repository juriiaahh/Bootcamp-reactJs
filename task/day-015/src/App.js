import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import FormLogin from './components/formLogin';
import FormRegister from './components/formRegister';
import Carousel from './components/Carousel';
import Content from './components/Content';
import Price from './components/Price';
import Profile from './components/Profile';
import ServiceWebDesign from './components/ServiceWebDesign';
import webDevelopment from './components/webDevelopment';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={FormLogin} />
        <Route path="/signup" exact component={FormRegister} />
        <Route path="/home" exact component={Carousel} />
        <Route path="/product" exact component={Content} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/price" exact component={Price} />
        <Route path="/service" exact component={ServiceWebDesign} />
        <Route path="/servicedev" exact component={webDevelopment} />
      </Switch>
    </Router>
  );
};

export default App;