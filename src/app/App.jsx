import React from "react";
import "./App.css";
// Импорт путей
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// Импорт страниц
import HomePage from '../pages/HomePage.jsx';
import SeminarsPage from '../pages/SeminarsPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
// Импорт виджетов
import NavMenu from "../widgets/NavMenu";
import Footer from "../widgets/Footer";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between App">
      <NavMenu />
        <Router>
          <main>
            {/* Маршруты */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/seminars" element={<SeminarsPage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* Редирект на главную страницу для несуществующих маршрутов */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </Router>
        <Footer />
      </div>
  );
};

export default App;
