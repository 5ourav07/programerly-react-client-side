import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <Courses></Courses>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            }
        ]
    }
]);