import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ isAuthenticated, handleLogout, children }) =>(
    <>
        <Header  isAuthenticated={isAuthenticated} handleLogout={handleLogout} children={children}/>
        <Outlet/>
        <Footer/>
    </>
)

export default Layout;