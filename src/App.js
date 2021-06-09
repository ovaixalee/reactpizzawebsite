import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Products from './components/Products';
import { productData } from './components/Products/data';
import { GlobalStyle } from './globalStyles';
import Hero from './Hero';
function App() {
  return (
    <Router>
     <GlobalStyle />
     <Hero />
     <Products heading = 'Choose your favorite' data={productData} />
    </Router>
  );
}

export default App;
