import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import About from "../pages/About";
import ErrorElement from "../error/ErrorElement";

export const router = createBrowserRouter([
    {
        path: "/", element: <Root />, errorElement: <ErrorElement />,
        children: [
            { index: true, element: <Home /> },
            { path: '/contact', element: <Contact /> },
            { path: '/products', element: <Products /> },
            { path: '/about', element: <About /> },
        ]
    },
]);