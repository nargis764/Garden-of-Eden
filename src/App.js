import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Products from "./components/Products"
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Products />}/>
          <Route path="/cart" element = {<Cart />}/>
          <Route path="/checkout" element = {<Checkout />}/>
          <Route path="/details/:id" element = {<ProductDetails />}/>
        </Routes>        
      </div>
    </BrowserRouter>
  );
}

export default App;
