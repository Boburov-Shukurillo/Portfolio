import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
window.scrollTo({
    top: 0,
});
const Mainlayout = () => {
    return (
        <div className="h-full demo">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Mainlayout;
