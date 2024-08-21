import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);
    
    if (loading) {
        return <span><progress className="progress w-56"></progress>
        </span>
    }
    if (user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
    // return <Navigate state={{from: location}} to={'/login'} replace></Navigate>
};

export default PrivateRouter;