import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Orders from "../Pages/Orders/Orders";
import PrivateRouter from "../firebase/PrivateRouter";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/customer',
                element:<PrivateRouter><Orders></Orders></PrivateRouter>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRouter><Checkout></Checkout></PrivateRouter>,
                loader:({params})=>fetch(`https://mycardocserver02.vercel.app/services/${params.id}`)
            }
        ]
    }
])
export default router;