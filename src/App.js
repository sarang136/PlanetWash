import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Services from './Components/Services';
import WhoAreWe from './Components/WhoAreWe';
import WhyChoose from './Components/WhyChoose';
import Form from './Components/Form';
import Footer from './Components/Footer';
import FinalDiv from './Components/FinalDiv';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Body/>
    <Services/>
    <WhoAreWe/>
    <WhyChoose/>
    <Form/>
    <Footer/>
    <FinalDiv/>
    </div>
  );
}

export default App;
