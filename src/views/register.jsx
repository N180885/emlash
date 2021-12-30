import React, { Component } from "react";
import {Link} from "react-router-dom";
class Register extends Component {
  state={};
  render() {
   return (
    <>
      <div className="container">
          <div className="nazad">
        <Link to="/main">На главную</Link>
          </div>
          <div className="links">
        <Link to="/sot">Сотрудники</Link>
        <Link to="/rez">Резиденты</Link>
        <Link to="/lech">Учреждения</Link>
        <Link to="/info">Общая информация</Link>
          </div>
      </div>
    </>
  );
}
};
export default Register;
