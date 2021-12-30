import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Voz from "./img/voz.jpeg"
import Nav from "./components/nav";
import Main from "./components/main";
import Home from "./components/home";
import Enter from "./views/enter";
import Register from "./views/register";
import Sot from "./views/sot";
import Rez from "./views/rez";
import Lech from "./views/lech";
import Info from "./views/info";
import Add from "./views/add";
import List from "./views/list";
import "./style.css";

function App () {
  return (
    <Router> 
    <>
     <img src={Voz} alt=""/> 
     <Nav />
     
     <Switch>     
        <Route exact path="/" component={Home} />;
        <Route path="/main" component={Main} />;
        <Route path="/register" component={Register} />;
        <Route path="/enter" component={Enter} />;
        <Route path="/sot" component={Sot} />;
        <Route path="/rez" component={Rez} />;
        <Route path="/lech" component={Lech} />;
        <Route path="/info" component={Info} />;
        <Route path="/add" component={Add} />;
        <Route path="/list" component={List} />;
     </Switch>      

     </>
    </Router>
  );
};
export default App;
