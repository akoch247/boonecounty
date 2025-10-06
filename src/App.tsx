import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import HomePage from "./pages/HomePage";
import JoinPage from "./pages/JoinPage";
import NewsPage from "./pages/NewsPage";
import Layout from "./layout/Layout";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="aboutus" element={<AboutPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="get-involved" element={<GetInvolvedPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="news" element={<NewsPage />} />
      </Route>
    </Routes>
    </>
    
  );
}