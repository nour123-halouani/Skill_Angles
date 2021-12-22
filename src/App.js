import "./App.css";
import * as React from "react";
import Acctivation from "./Acctivation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./Inscription";
import Navbar from "./Navbar";
import Group from "./Group";
import Home from "./Home";
import NavbarHome from "./NavbarHome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Acctivation" element={<Acctivation />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route
            path="/Group"
            element={
              <>
                <Navbar />
                <Group />
              </>
            }
          />
          <Route
            path="/Home"
            element={
              <>
                <NavbarHome/>
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
