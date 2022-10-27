import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Premium from "../Pages/Premium/Premium";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import Login from "../Pages/Users/Login/Login";
import SignUp from "../Pages/Users/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/categories/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://programerly-server-side.vercel.app/categories/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                loader: ({ params }) => fetch(`https://programerly-server-side.vercel.app/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/*',
                element: <NotFound></NotFound>,
            }
        ]
    }
]);