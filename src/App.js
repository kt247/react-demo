import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header/';
import Footer from './components/footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={Terms} />
          <Footer />
        </ScrollToTop>
      </Router>
    )
  }
};

export default App;