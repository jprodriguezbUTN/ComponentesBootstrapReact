import "./App.css";
import Navtabs from "./Components/Navtabs.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Tooltip from "./Components/ToolTips.jsx";
import Modal from "./Components/Modal";

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const PAccordion = React.lazy(() => import("./pages/PAccordion.jsx"));
const PAlert = React.lazy(() => import("./pages/PAlert.jsx"));
const PCard = React.lazy(() => import("./pages/PCard.jsx"));
const PCarousel = React.lazy(() => import("./pages/PCarousel.jsx"));
const PCollapse = React.lazy(() => import("./pages/PCollapse.jsx"));
const PDatalist = React.lazy(() => import("./pages/PDatalist.jsx"));
const PDropdown = React.lazy(() => import("./pages/PDropdown.jsx"));
const PHome = React.lazy(() => import("./pages/PHome.jsx"));
const PImages = React.lazy(() => import("./pages/PImages.jsx"));
const PNavtab = React.lazy(() => import("./pages/PNavtab.jsx"));
const POffcanvas = React.lazy(() => import("./pages/POffcanvas.jsx"));
const PProgress = React.lazy(() => import("./pages/PProgress.jsx"));
const PSelect = React.lazy(() => import("./pages/PSelect.jsx"));
const PSpinner = React.lazy(() => import("./pages/PSpinner.jsx"));
const PTable = React.lazy(() => import("./pages/PTable.jsx"));
const PPopoverTooltips = React.lazy(() => import("./pages/PPopoverTooltips.jsx"));
const PPokemon = React.lazy(() => import("./pages/PPokemon.jsx"));
const PScrollSpy = React.lazy(() => import("./pages/PScrollSpy.jsx"));
const PButton = React.lazy(() => import("./pages/PButton.jsx"));
const tabs = [
  { label: "Home", to: "/", icon: "bi-house-fill" },
  { label: "Accordion", to: "/accordion" },
  { label: "Alert", to: "/alert" },
  { label: "Card", to: "/card" },
  { label: "Carousel", to: "/carousel",},
  { label: "Collapse", to: "/Collapse" },
  { label: "Datalist", to: "/datalist" },
  { label: "Dropdown", to: "/dropdown" },
  { label: "Navtab", to: "/navtab" },
  { label: "Offcanvas", to: "/offcanvas"},
  { label: "Progress", to: "/Progress" },
  { label: "Select", to: "/select" },
  { label: "Spinner", to: "/spinner" },
  { label: "Table", to: "/table" },
  { label: "Images", to: "/images" },
  { label: "Popover & Tooltips", to: "/popover-tooltips" },
  { label: "Pokemon", to: "/pokemon" },
  { label: "Button", to: "/button" },
  { label: "ScrollSpy", to: "/ScrollSpy" }
  
];

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
              <Navtabs
                tabs={tabs}
                variant="pills"
                centered={false}
              />
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<PHome />} />

          <Route path="/accordion" element={<PAccordion />} />
          <Route path="/alert" element={<PAlert />} />
          <Route path="/card" element={<PCard />} />
          <Route path="/carousel" element={<PCarousel />} />
          <Route path="/Collapse" element={<PCollapse />} />
          <Route path="/datalist" element={<PDatalist />} />
          <Route path="/dropdown" element={<PDropdown />} />
          <Route path="/images" element={<PImages />} />
          <Route path="/navtab" element={<PNavtab />} />
          <Route path="/offcanvas" element={<POffcanvas />} />
          <Route path="/Progress" element={<PProgress />} />
          <Route path="/Pokemon" element={<PPokemon />} />
          <Route path="/select" element={<PSelect />} />
          <Route path="/spinner" element={<PSpinner />} />
          <Route path="/table" element={<PTable />} />
          <Route path="/popover-tooltips" element={<PPopoverTooltips />} />
          <Route path="/ScrollSpy" element={<PScrollSpy />} />
          <Route path="/button" element={<PButton />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
