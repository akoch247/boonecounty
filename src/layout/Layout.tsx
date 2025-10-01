import React from "react";
import Navbar from "./Navbar.tsx"
import { Outlet } from "react-router-dom";
import Footer from "./Footer.tsx";

export default function Layout() {
    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}