import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Index";
import Browswe_All_Jobs from "../Pages/Browse-all-jobs/index";
import Layout from "../Layout/index";
import Post from "../Pages/SinglePost";
import SearchResult from "../Pages/SearchResult";

import Login from "@Pages/Login/index.jsx";
import SignUp from "@Pages/SignUp/index.jsx";
import Error_404 from "../Pages/Error-404";

import Contact_Us from "../Pages/Contact-Us";
import Admin from "../Admin";
import Index from '@Admin/Index/';
import AddJob from "@Admin/Add-Job";
import AllJobsList from "@Admin/All-Jobs-list";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {

                element: <Home />,
                index: true
            },
            {
                path: '/Jobs',
                element: <Browswe_All_Jobs />
            }, {
                path: '/post',
                element: <Post />
            }, {
                path: '/searchResult',
                element: <SearchResult />
            }, {
                path: '/contact-us',
                element: <Contact_Us />
            }, {
                path: 'Admin',
                element: <Admin />,
                children: [{
                    path: '/Admin/',
                    element: <Index />,
                    index: true
                }, {
                    path: '/Admin/Add-Job',
                    element: <AddJob />
                }, {
                    path: '/Admin/All-Jobs-list',
                    element: <AllJobsList />
                }
                ]
            }

            , {
                path: '*',
                element: <Error_404 />
            }
        ]

    }, {
        path: '/login',
        element: <Login />
    }, {
        path: '/signUp',
        element: <SignUp />
    }

]);

export { router }