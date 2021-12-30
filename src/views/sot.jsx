import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sot extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <div className="nazad">
            <Link to="/register">Назад</Link>
          </div>
          <div className="links">
            <Link to="/add">Добавить сотрудника</Link>
            <Link to="/list">Список сотрудников</Link>
          </div>
        </div>
      </>
    );
  }
}
export default Sot;
