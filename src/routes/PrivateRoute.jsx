import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return  <Spinner animation="grow" />
    }

    if (user?.email) {
        return children;
    } else
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
