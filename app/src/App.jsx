import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/workspace" element={ <Workspace />} />
    </Routes>
  );
}

export default App;
