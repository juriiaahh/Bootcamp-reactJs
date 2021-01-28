import './App.css';
import Header from './components/Header'
import Introduction from './components/Introduction'
import Footer from './components/Footer'
import Project from './components/Project';
import Partners from './components/Partners';

function App(){
  return(
    <div style={{backgroundColor:'#fff'}}>
      <Header/>
      <Introduction/>
      <Project />
      <Partners />
      <Footer/>
    </div>
  );
}

export default App;