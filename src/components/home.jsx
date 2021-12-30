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
      <>      
      <img src={Voz} alt=""/>   
      <Nav/>
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home1} />;
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
  }
}
export default Home;
