//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarApp from './components/NavBarApp/index'
import Slider from './components/CarouselApp/carousel';
import Cards from './components/Cards/Cards';
import Texto from './components/Texto/Texto';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <div className="App">
      

      <NavbarApp/>

      <Slider/>

      <Texto/>

      <Cards/>
      
      <Footer/>
    </div>
    
  );
}


export default App;
