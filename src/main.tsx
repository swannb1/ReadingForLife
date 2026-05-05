import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AboutDyslexia from "./AboutDyslexia.tsx";
import Resources from "./Resources.tsx";
import Tutoring from "./Tutoring.tsx";
import Donate from "./Donate.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/ReadingForLife">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AboutDyslexia />} />
          <Route path="resources" element={<Resources />} />
          <Route path="tutoring" element={<Tutoring />} />
          <Route path="donate" element={<Donate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
