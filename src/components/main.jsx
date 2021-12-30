import React, { Component } from "react";
import { Link} from "react-router-dom";

class Main extends Component {
  state = {
    login: "",
    parol: "",
  };
  render() {
    return (
      <>
        <div className="log">
          <div className="log1">
            <h1>Вход в систему</h1>
            <div className="login">
              <b>Логин:</b>
              <input
                onChange={(e) => this.setState({ login: e.target.value })}
                type="text"
                placeholder="Введите ваш логин"
              />
            </div>
            <div className="parol">
              <b>Пароль:</b>
              <input
                onChange={(e) => this.setState({ parol: e.target.value })}
                type="password"
                placeholder="Введите ваш пароль"
              />
            </div>
            <Link to="/register">Вход</Link>
          </div>
        </div>     
      </>
    );
  }
}
export default Main;
