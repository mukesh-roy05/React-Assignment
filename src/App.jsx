import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import './App.css'; // Importing CSS for general styling

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <ProductListPage />
      </div>
    ),
  },
  {
    path: "/cart",
    element: (
      <div>
        <Header />
        <CartPage />
      </div>
    ),
  },
]);

const App =() =>{
  return (
    <RouterProvider router={router} />
  );
}

export default App;
