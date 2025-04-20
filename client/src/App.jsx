import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

{/*import pages*/}

import Home from "./pages/home";
import Menu from "./pages/menu";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

      </Routes>
    </Router>
  );
};

export default App;