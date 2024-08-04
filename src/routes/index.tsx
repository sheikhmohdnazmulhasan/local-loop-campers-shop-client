import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import About from "../pages/About";
import ErrorElement from "../error/ErrorElement";
import DashboardRoot from "../pages/dashboard/Root";

import AllProducts from "../pages/dashboard/AllProducts";
import AddProduct from "../pages/dashboard/AddProduct";
import EditProduct from "../pages/dashboard/EditProduct";
import PrdctDetails from "../pages/PrdctDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

export const router = createBrowserRouter([
    {
        path: "/", element: <Root />, errorElement: <ErrorElement />,
        children: [
            { index: true, element: <Home /> },
            { path: '/contact', element: <Contact /> },
            { path: '/products', element: <Products /> },
            { path: '/about', element: <About /> },
            { path: '/cart', element: <Cart /> },
            { path: '/cart/checkout', element: < Checkout /> },
            { path: '/products/details/:id', element: <PrdctDetails /> },
        ]
    },

    {
        path: '/dashboard', element: <DashboardRoot />,
        children: [
            { path: 'new', element: <AddProduct /> },
            { path: 'products', element: <AllProducts /> },
            { index: true, element: <AllProducts /> },
            { path: 'products/edit/:id', element: <EditProduct /> },
        ]

    }
]);