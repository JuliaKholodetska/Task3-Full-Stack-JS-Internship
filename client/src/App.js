import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './pages/ProductPage';
import HomeScreen from './pages/HomePage';

function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Beauty Beach
            </a>
          </div>
          <div id="navbar-button">
            <a className="fas fa-shopping-cart" href="/cart"></a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;