import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Voz from "../img/voz.jpeg"
import Nav from "./nav";
import Main from "./main";
import Home1 from "./home1";
import Enter from "../views/enter";
import Register from "../views/register";
import Sot from "../views/sot";
import Rez from "../views/rez";
import Lech from "../views/lech";
import Info from "../views/info";
import Add from "../views/add";
import List from "../views/list";
class Home extends Component {
  state = {
   
  };
  render() {
    return (
      <BrowserRouter>
      <>      
      <img src={Voz} alt=""/>   
      <Nav/>
        <Switch>
        <Route exact path="/" component={Home1} />;
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
      </BrowserRouter>
    );
  }
}
export default Home;
