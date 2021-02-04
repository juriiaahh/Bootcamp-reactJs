import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import FormLogin from './components/formLogin';
import FormRegister from './components/formRegister';
import Carousel from './components/Carousel';
import Content from './components/Content';
import Price from './components/Price';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={FormLogin} />
        <Route path="/signup" exact component={FormRegister} />
        <Route path="/home" exact component={Carousel} />
        <Route path="/product" exact component={Content} />
        <Route path="/price" exact component={Price} />
      </Switch>
    </Router>
  );
};

export default App;