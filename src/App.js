import './App.css';
import Header from './Components/header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/home';
import Cart from './Components/cart';




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
