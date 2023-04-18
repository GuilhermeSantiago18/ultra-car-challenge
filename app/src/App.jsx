import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";


function App() {
  return (

    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/workspace" element={ <Workspace />} />
      <Route exact path="/checkout" element={ <Checkout />} />
    </Routes>
  );
}

export default App;
