import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/shares/ErrorPage/ErrorPage";
import Blog from "../pages/Home/Blog";
import AddToy from "../pages/AddToy/AddToy";
import AllToysPage from "../pages/AllToys/AllToysPage";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateToys from "../pages/UpdateToys/UpdateToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/addToy',
                element: <PrivateRoute> <AddToy /></PrivateRoute>
            },
            {
                path: '/allToys',
                element: <AllToysPage />
            },
            {
                path: '/mytoys',
                element: <PrivateRoute> <MyToys /></PrivateRoute>
            },
            {
                path: "alltoys/:id",
                element: <PrivateRoute><UpdateToys /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ass-server-slsuyel.vercel.app/${params.id}`)
            },
            {
                path: "toydetails/:id",
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://ass-server-slsuyel.vercel.app/alltoys/${params.id}`)
            },
        ]
    },
]);

export default router;