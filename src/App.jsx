import './App.css'
import Navtabs from "./Components/Navtabs.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Collapse from './Components/Collapse'; 

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const PHome = React.lazy(() => import('./pages/PHome.jsx'));
const PTable = React.lazy(() => import('./pages/PTable.jsx'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="container mt-4">Cargando...</div>}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Mi Sitio
              <span className="badge bg-info ms-2">v1.0</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <Navtabs variant="nav-tabs">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i className="bi bi-house-fill"></i> Home
                    <span className="badge bg-success ms-2">Activo</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/table">
                    Table
                  </Link>
                </li>
              </Navtabs>
            </div>
            <Collapse />
          </div>
        </nav>


        <Routes>
          <Route path="/" element={<PHome />} />
          <Route path="/table" element={<PTable />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    
  );
}

export default App;