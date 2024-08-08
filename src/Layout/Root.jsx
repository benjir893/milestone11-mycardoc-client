import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Header from "../Pages/Header/Header";


const Root = () => {
    return (
        <div className="mt-2 mx-16">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;