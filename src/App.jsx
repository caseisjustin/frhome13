import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Crud from "./components/Crud";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Crud />} />
      </Routes>
    </Router>
  );
};

export default App;
