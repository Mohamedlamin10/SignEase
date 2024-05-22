import './App.css';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Information from './components/information/information';
import Gallary from './components/gallary/gallary';
import Cv from './components/Cv/cv';
import ContactUs from './components/Contactus/contactus';
import Fotter from './components/Fotter/fotter';
import Luange from './components/Luange/luangSigen';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Information></Information>
      <Gallary></Gallary>
      <Luange></Luange>
      <Cv></Cv>
      <ContactUs></ContactUs>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
