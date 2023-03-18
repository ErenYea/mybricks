import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { useState } from "react";
import Teams from "./components/Teams";

import Footer from "./components/Footer"

import NotFOund from "./components/NotFOund";
import Portfolio from "./components/Portfolio";

function App() {
  const [navBar, setNavBar] = useState([1, 0, 0, 0, 0, 0]);
  return (
    <div className="App">
      <NavBar navBar={navBar} setNavBar={setNavBar} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home navBar={navBar} setNavBar={setNavBar} />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Portfolio navBar={navBar} setNavBar={setNavBar} />
            </>
          }
        />
        <Route
          path="/teams"
          element={
            <>
              <Teams navBar={navBar} setNavBar={setNavBar} />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <NotFOund setNavBar={setNavBar} />
            </>
          }
        />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
