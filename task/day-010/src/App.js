import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Content from './components/Content';
import Footer from './components/Footer';
import Price from './components/Price';
import Login from './day-011/login';
import Register from './day-011/register';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Register /> */}
      {/* <Header /> 
      <Carousel />
      <Content />
      <Price />
      <Footer /> */}
    </div>
  );
}

export default App;
