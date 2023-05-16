import { Outlet } from "react-router-dom";
import Navbar from "../pages/shares/Navbar/Navbar";
import Footer from "../pages/shares/Footer/Footer";

const MainLayouts = () => {
    return (
        <div>
            <Navbar> </Navbar>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;