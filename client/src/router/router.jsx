import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "*",
        element: <Home/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/blog",
        element: <Blog/>
    }
]);