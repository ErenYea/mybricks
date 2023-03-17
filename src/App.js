import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { useState } from "react";
import Teams from "./components/Teams";

function App() {
  const [navBar, setNavBar] = useState([1, 0, 0, 0, 0, 0]);
  return (
    <div className="App home ">
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
              <h2 className=" text-2xl font-bold">Not Found</h2>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
