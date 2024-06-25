import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routers, Route, Routes} from 'react-router-dom'
import Users from './Users';
import Products from './Products'
import Home from './Home';
import Cart from './Cart';
import Buy from './Buy';
import Search from './search'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Users' element={<Users/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path="/Cart/:productId" element={<Buy/>}></Route>
      <Route path="/Products/:productsearch" element={<Search/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
