import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Content from './components/Content';
import Footer from './components/Footer';
import Price from './components/Price';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Content />
      <Price />
      <Footer />
    </div>
  );
}

export default App;
