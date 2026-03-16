import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import ProductList from "../pages/products/ProductList";
import ProductDetail from "../pages/products/ProductDetail";



const Router = createBrowserRouter([

{
 path: "/",
 element: <MainLayout />,
 children: [

  { index: true, element: <Home /> },
  { path: "products", element: <ProductList /> },
  { path: "products/:id", element: <ProductDetail /> }

 ]
},

{
 path: "/auth",
 element: <AuthLayout />,
 children: [

  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> }

 ]
}

]);

export default Router;