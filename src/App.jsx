import "./App.css";
import Navtabs from "./Components/Navtabs.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Tooltip from "./Components/ToolTips.jsx";
import { NavLink } from "react-router-dom";
import Modal from "./Components/Modal";

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const PHome = React.lazy(() => import("./pages/PHome.jsx"));
const PTable = React.lazy(() => import("./pages/PTable.jsx"));
const PDatalist = React.lazy(() => import("./pages/PDatalist.jsx"));
const PSelect = React.lazy(() => import("./pages/PSelect.jsx"));
const PProgress = React.lazy(() => import("./pages/PProgress.jsx"));
const PNavtab = React.lazy(() => import("./pages/PNavtab.jsx"));
const PSpinner = React.lazy(() => import("./pages/PSpinner.jsx"));
const POffcanvas = React.lazy(() => import("./pages/POffcanvas.jsx"));
const PAccordion = React.lazy(() => import("./pages/PAccordion.jsx"));
const PCard = React.lazy(() => import("./pages/PCard.jsx"));
const PImages = React.lazy(() => import("./pages/PImages.jsx"));
const PAlert = React.lazy(() => import("./pages/PAlert.jsx"));
const PCollapse = React.lazy(() => import("./pages/PCollapse.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Modal />
      <Suspense fallback={<div className="container mt-4">Cargando...</div>}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Mi Sitio
              <span className="badge bg-info ms-2">v1.0</span>
            </Link>
            <Tooltip text="Abrir menú">
              <button
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </Tooltip>

            <div className="collapse navbar-collapse" id="navbarNav">
              <Navtabs variant="nav-pills" extraClasses="nav-fill">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <i className="bi bi-house-fill"></i> Home
                        {isActive && (
                          <span className="badge bg-success ms-2">Activo</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/table"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Table
                        {isActive && (
                          <span className="badge bg-success ms-2">Activo</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/offcanvas"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Offcanvas
                        {isActive && (
                          <span className="badge bg-success ms-2">Activo</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/datalist"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Datalist
                        {isActive && (
                          <span className="badge bg-success ms-2">Activo</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/select"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Select
                        {isActive && (
                          <span className="badge bg-success ms-2">Activo</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/Progress"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Progress
                        {isActive && (
                          <span className="badge bg-success ms-2">Activo</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/navtab"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Navtab
                        {isActive && (
                          <span className="badge bg-success ms-2">Activo</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/spinner"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Spinner
                        {isActive && (
                          <span className="badge bg-success ms-2">Activo</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/card"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Card
                        {isActive && (
                          <span className="badge bg-success ms-2">Activo</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/accordion"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Accordion
                        {isActive && (
                          <span className="badge bg-success ms-2">Activo</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/Collapse"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Collapse
                        {isActive && (
                          <span className="badge bg-success ms-2">Activo</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/alert"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        Alert
                        {isActive && (
                          <span className="badge bg-success ms-2">Activo</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>

              </Navtabs>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<PHome />} />
          <Route path="/table" element={<PTable />} />
          <Route path="/datalist" element={<PDatalist />} />
          <Route path="/select" element={<PSelect />} />
          <Route path="/Progress" element={<PProgress />} />
          <Route path="/navtab" element={<PNavtab />} />
          <Route path="/spinner" element={<PSpinner />} />
          <Route path="/offcanvas" element={<POffcanvas />} />
          <Route path="/accordion" element={<PAccordion />} />
          <Route path="/card" element={<PCard />} />
          <Route path="/images" element={<PImages />} />
          <Route path="/Collapse" element={<PCollapse />} />
          <Route path="/alert" element={<PAlert />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
