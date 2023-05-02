import './App.css';
import Nav from "./components/nav/nav.js";
import Main from "./components/Main/Main.js";
import AboutUs from './components/AboutUs/AboutUs';
import Feature from './components/Feature/Feature';
import Limited from './components/Limited/Limited';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
   <Nav />
   <Main />
   <AboutUs/>
   <Feature />
   <Limited />
   <Contact />
    </div>
  );
}

export default App;
