
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Shop />} />
          <Route path='/mens' element = {<ShopCategory category ="men"/>} />
          <Route path='/womens' element = {<ShopCategory category ="womens"/>} />
          <Route path='/kids' element = {<ShopCategory category ="kids"/>} />
          <Route path='/product' element = {<Products />} >
            <Route path=':productId' element = {<Products />} />
          </Route>
          <Route path='/cart' element = {<Cart />} />
          <Route path='/Login' element = {<LoginSignUp />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
