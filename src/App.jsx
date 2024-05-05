import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Contacts from './Contacts';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: 'Produkt 1', price: 10 },
        { id: 2, name: 'Produkt 2', price: 20 },
        { id: 3, name: 'Produkt 3', price: 30 },
      ];
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home products={products} />
          </Route>
          <Route path="/produkt/:id">
            <ProductDetail products={products} />
          </Route>
          <Route path="/kosik">
            <Cart />
          </Route>
          <Route path="/kontakty">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
