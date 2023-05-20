import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return  <div className="w-100 text-center"><Spinner animation="grow"className="p-4" /></div>
    }

    if (user?.email) {
        return children;
    } else
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
