import React, {useContext} from "react"
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthProvider.js"

const RequireAuth = () => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();

    return (
        auth.userInfos //?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.userInfos
                ? <Navigate to="unauthorized" state={{ from: location }} replace />
                : <Navigate to="login" state={{ from: location }} replace />
    );
}

export default RequireAuth; 