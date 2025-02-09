import React from "react";
import "./App.css";
// Import routers
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import pages
import HomePage from '../pages/HomePage.jsx'
import SeminarsPage from '../pages/SeminarsPage.jsx'
// Components
import NavMenu from "../widgets/NavMenu";
import Footer from "../widgets/Footer";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between App">
      <NavMenu />
        <Router>
          <main>
            {/* App's Routes */}
            <Routes>
              <Route path="/seminars" element={<SeminarsPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
        </Router>
        <Footer />
      </div>
  );
};

export default App;