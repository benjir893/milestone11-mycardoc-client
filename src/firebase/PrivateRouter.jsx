import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouter = ({ children }) => {
    const [user, loading] = useContext(AuthContext);
    if (loading) {
        return <span><progress className="progress w-56"></progress>
        </span>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRouter;