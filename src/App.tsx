import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import HomePage from "./pages/HomePage";
import JoinPage from "./pages/JoinPage";
import NewsPage from "./pages/NewsPage";
import Layout from "./layout/Layout";

export default function App() {
  return (
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
  );
}