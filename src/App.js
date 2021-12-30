import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.css";
import Nav from "./components/nav";
import Main from "./components/main";
import Home from "./components/home";
import Enter from "./views/enter";
import Register from "./views/register";
import Sot from "./views/sot";
import Rez from "./views/rez";
import Lech from "./views/lech";
import Voz from "./img/voz.jpeg"
import Info from "./views/info";
import Add from "./views/add";
import List from "./views/list";

const App = () => {
  return (
    <>
      <img src={Voz} alt=""/>      
      <Nav />
      
      <BrowserRouter>
      <Switch>      
          <Route exact path="/" component={Home} />;
          <Route exact path="/main" component={Main} />;
          <Route exact path="/register" component={Register} />;
          <Route exact path="/enter" component={Enter} />;
          <Route exact path="/sot" component={Sot} />;
          <Route exact path="/rez" component={Rez} />;
          <Route exact path="/lech" component={Lech} />;
          <Route exact path="/info" component={Info} />;
          <Route exact path="/add" component={Add} />;
          <Route exact path="/list" component={List} />;
        </Switch>
        </BrowserRouter>        
    </>
  );
};
export default App;
