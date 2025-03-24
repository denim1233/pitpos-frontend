import {Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Product';
import Login from '../pages/Login';

const AppRouter = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
 
  );
};

export default AppRouter;
