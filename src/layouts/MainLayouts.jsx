import { Outlet } from "react-router-dom";

import Footer from "../pages/shares/Footer/Footer";
import Navigation from "../pages/shares/Navbar/Navigation";

const MainLayouts = () => {
    return (
        <div>
            <Navigation />
         
                <Outlet />
       
            <Footer />
        </div>
    );
};

export default MainLayouts;