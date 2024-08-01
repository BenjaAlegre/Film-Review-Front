import { Navigate, Outlet } from "react-router-dom";

const RoleAccess = () => {

    const user = JSON.parse(sessionStorage.getItem("user"));

    console.log(user.role);

    if (!user) {
        return <Navigate to="/unauthorized" />;
    }

    return user.role.toLowerCase() === "admin"
      ? <Outlet />
      : <Navigate to="/unauthorized"/>;
};

export default RoleAccess;
  