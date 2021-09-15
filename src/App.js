import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//  importing sections
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/home/Index.jsx'
import Products from './components/products/Index.jsx'
import './App.css';
import './styles.css';
import './scripts.js';
function Pages() {
 
  return (
    <Router>
      <Route exact  path="/" component={Home}/>
      <Route exact  path="/products" component={Products}/>
    </Router>
    )
  }
function App() {
  return (
    <div className="App">
      <Nav/>
      <Pages/>
      <Footer/>
    </div>
  );
}

export default App;
