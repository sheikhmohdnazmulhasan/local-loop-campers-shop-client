import { FC } from "react";

import Navbar from "./components/Global/nav/Navbar";
import { Outlet } from "react-router-dom";
import CookieWrnig from "./components/Global/CookieWrnig";

const Root: FC = () => {
    return (
        <div>
            <Navbar />

            <div className="!min-h-screen "><Outlet /></div>

            {/* <Footer /> */}

            <CookieWrnig />
        </div>
    );
};

export default Root;