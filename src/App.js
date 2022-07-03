import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Products from './Components/Products';
import Product from './Components/Product';
import About from './Components/About';
import Contact from './Components/Contact';
import { Redirect } from 'react-router-dom';
function App() {
  return (
   <>
     <Header/>
     <Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/products" component={Products}/>
<Route exact path="/products/:id" component={Product}/>
<Route exact path="/about" component={About}/>
<Route exact path="/contact" component={Contact}/>
<Redirect to="/"/>
     </Switch>
   </>
  );
}

export default App
