import NavBar from "../NavBar/NavBar.jsx";

const Header = ({ isAuthenticated, handleLogout, children }) =>(
    <>
    <NavBar  isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
    <main> {children}</main>
    </>
)

export default Header;