import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import App from "../../App";
import Users from "../Users/Users";
import Update from "../Update/Update";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Users></Users>,
                loader: () => fetch('http://localhost:5000/users')

            },
            {
                path: '/app',
                element: <App></App>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
            }
        ]
    },
]);

export default Router;