import { FC } from "react";
import Footer from "./components/Global/nav/Footer";
import Navbar from "./components/Global/nav/Navbar";
import { Outlet } from "react-router-dom";

const Root: FC = () => {
    return (
        <div>
            <Navbar />
            <div className="h-screen"><Outlet /></div>
            <Footer />
        </div>
    );
};

export default Root;