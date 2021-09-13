import 'bootstrap/dist/css/bootstrap.min.css';

//  importing sections
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/home/Index'
import './App.css';
import './styles.css';
import './scripts.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
