import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import Home from "./components/home";


const App = () => {
  return (
    <BrowserRouter>    
     <Home/>    
    </BrowserRouter>
  );
};
export default App;
